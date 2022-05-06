import {AuthForm} from "../../components";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    return (
        <div>
            <AuthForm/>
            <br/>
            <button><Link to={'/login'}>Login</Link></button>
        </div>
    );
};

export {RegisterPage};