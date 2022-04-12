import React, {useEffect, useState} from 'react';
import {userService} from "../../Services";
import {User} from "../User";

const Users = ({setUserDetails, trigger}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <h2>Users:</h2>
                {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails} trigger={trigger}/>)}

        </div>
    );
};

export {Users};