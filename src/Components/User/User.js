import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div>
            <h2>ID: {id}</h2> <Link to={id.toString()}>Get Details</Link>
            <h3>Name: {name}</h3>
            <h3>Username: {username}</h3>
            <h3>Email: {email}</h3>
            <hr/>
        </div>
    );
};

export {User};