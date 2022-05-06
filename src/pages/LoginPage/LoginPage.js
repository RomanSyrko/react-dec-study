import {AuthForm} from "../../components";
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