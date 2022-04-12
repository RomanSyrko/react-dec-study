import React from 'react';

const User = ({user, setUserDetails, trigger}) => {
    const {id, name} = user;
    const click = () => {
        setUserDetails(user)
        trigger()
    }
    
    return (
        <div className={'text'}>
            {id}) {name}
            <button onClick={() => click()}>Get Details</button>

        </div>
    );
};

export {User};