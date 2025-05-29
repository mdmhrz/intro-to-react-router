import React from 'react';

const User = ({user}) => {

    const {name, email, phone} = user;
    
    const userStyle = {
        border: '2px solid gray',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
        </div>
    );
};

export default User;