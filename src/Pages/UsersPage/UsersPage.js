import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {User} from "../../Components";
import {userService} from "../../Services";
import css from "./UsersPage.module.css";

const UsersPage = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUser(data))
    }, [])

    return (
        <div className={css.flex}>
            <div className={css.wrap}>{user.map(user => <User key={user.id} user={user}/>)}</div>
            <hr/>
            <div><Outlet/></div>
        </div>
    );
};

export {UsersPage};