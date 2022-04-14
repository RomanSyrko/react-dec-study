import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div>
            <h2>ID: {id}</h2>
            <h3>Name: {name}</h3>
            <Link to={id.toString()} state={user}>Get Details</Link>
            <hr/>
        </div>
    );
};

export {User};