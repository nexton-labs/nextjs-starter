import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <img src="../static/images/nexton-logo.svg" />
            <h1>Welcome Nexton Nextjs starter!</h1>
            <Link href="/about">
                <button>About</button>
            </Link>&nbsp;
            <Link href="/posts">
                <button>Posts</button>
            </Link>
        </div>
    )
};

export default Home;