import css from './MainLayout.module.css'
import {Outlet, NavLink} from "react-router-dom";

const MainLayout = () => {
    // const navigate = useNavigate();
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/comments">Comments</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};