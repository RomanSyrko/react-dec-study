import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../Services";
import {UserDetails} from "../../Components";


const SingleUserPage = () => {


    const [user, setUser] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        userService.getById(id).then(({data}) => setUser(data))
    },[id])

    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {SingleUserPage};