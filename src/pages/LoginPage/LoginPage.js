import {AuthForm} from "../../components/AuthForm/AuthForm";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <AuthForm/>
            <br/>
            <button><Link to={'/register'}>Register</Link></button>
        </div>
    );
};

export {LoginPage};