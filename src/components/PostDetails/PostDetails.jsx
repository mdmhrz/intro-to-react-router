import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    return (
        <div style={{ border: '2px solid gray', padding: '10px', borderRadius: "10px" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;