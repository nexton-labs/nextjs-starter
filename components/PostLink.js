import React from 'react';
import Link from 'next/link';

const PostLink = props => {
    return (
        <li>
            <Link href={`/post-detail?id=${props.id}`}>
                <a>{props.id}</a>
            </Link>
        </li>
    );
};

export default PostLink;
