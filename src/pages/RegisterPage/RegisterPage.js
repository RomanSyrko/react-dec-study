import {AuthForm} from "../../components/AuthForm/AuthForm";
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