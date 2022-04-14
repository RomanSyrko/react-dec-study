import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom"

import {User} from "../../Components";
import {userService} from "../../Services";
import css from "./UsersPage.module.css";

const UsersPage = () => {
    const [user, setUser] = useState([]);

    useEffect(()=>{
        userService.getAll().then(({data}) => setUser(data))
    },[])


    return (
        <div className={css.flex}>
            <div>{user.map(user => <User key={user.id} user={user}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {UsersPage};