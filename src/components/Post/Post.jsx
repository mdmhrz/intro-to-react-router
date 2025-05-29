import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {

    const { id, title } = post;

    const postStyle = {
        border: '2px solid gray',
        borderRadius: '10px',
        marginBottom: '10px',
        padding: '20px',
    }

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of: {id}</button>
        </div>
    );
};

export default Post;