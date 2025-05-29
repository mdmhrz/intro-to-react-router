import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();



    return (
        <div style={{ border: '2px solid gray', padding: '10px', borderRadius: "10px" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;