import {useForm} from "react-hook-form";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";


const AuthForm = () => {
    const {register, handleSubmit} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const {pathname} = useLocation();

    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true);
    }, [pathname]);

    const submit = (user) => {
    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>{isLogin ? 'login' : 'register'}</button>
            <div>

            </div>
        </form>
    );
};

export {AuthForm};