import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../Services";
import {UserDetails} from "../../Components";
import css from './SingleUserPage.module.css'


const SingleUserPage = () => {
    const [user, setUser] = useState([]);
    const {userID} = useParams();
    useEffect(() => {
        userService.getById(userID).then(({data}) => setUser(data))
    }, [userID])

    return (

        <div className={css.box}>
            {user && <UserDetails user={user}/>}
        </div>

    );
};

export {SingleUserPage};