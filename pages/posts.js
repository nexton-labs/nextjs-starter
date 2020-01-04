import React from 'react';
import PostLink from '../components/PostLink';

const About = () => {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
            <style jsx>{`
            h1 {
              color: red;
            }
         `}</style>
        </div>
    );
};

export default About;
