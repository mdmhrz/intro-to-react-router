import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const { website, name } = user;
    const { userid } = useParams();

    const navigate = useNavigate();

    const userDetailsStyle = {
        border: '2px solid gray',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={userDetailsStyle}>
            <h3>User details of: {userid}</h3>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
            <button onClick={() => navigate(-1)} >Go Back</button>
        </div>
    );
};

export default UserDetails;