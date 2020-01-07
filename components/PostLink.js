import React from 'react';
import { Link } from '../routes';

const PostLink = props => {
    return (
        <li>
            <Link route='post-detail' params={{
                id: props.id
            }}>
                <a>{props.id}</a>
            </Link>
        </li>
    );
};

export default PostLink;
