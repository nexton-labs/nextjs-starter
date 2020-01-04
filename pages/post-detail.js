import React, { Fragment } from 'react';

const Post = ({ identifier }) => {
    return (
        <Fragment>
            <h1>{identifier}</h1>
            <p>This is the blog post content.</p>
        </Fragment>
    );
};

Post.getInitialProps = ({ query }) => {
    return { identifier: query.id }
};

export default Post;
