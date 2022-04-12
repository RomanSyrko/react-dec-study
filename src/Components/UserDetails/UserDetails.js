import React from 'react';

const UserDetails = ({userDetails, getUserId}) => {
    let {id, name, email} = userDetails;
    return (
        <div>
            <h2>Details:</h2>
            <h4>ID: {id}</h4>
            <h4>name: {name}</h4>
            <h4>email: {email}</h4>
            <button onClick={()=>getUserId(id)}>Get Posts</button>
        </div>
    );
};

export {UserDetails};