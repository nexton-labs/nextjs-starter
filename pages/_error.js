import React, { Fragment } from 'react';
import Link from 'next/link';

export const Error = ({ statusCode }) => {
    return (
        <Fragment>
            {statusCode === 404 ?
                <div className="message">
                  <h1>Page not found :(</h1>
                  <p><Link href="/"><a>Back to Home</a></Link></p>
                </div>
                :
                <div className="message">
                  <h1>Happened an error :(</h1>
                  <p>Try after some seconds.</p>
                </div>
            }
          <style jsx>{`
        .message {
          padding: 100px 30px;
          text-align: center;
        }
        h1 {
          margin-bottom: 2em;
        }
        a {
          color: #8756ca;
        }
       `}</style>
        </Fragment>
    );
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
};

export default Error;
