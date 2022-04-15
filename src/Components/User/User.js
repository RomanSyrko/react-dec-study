import {Button} from "../Button/Button";
import css from './User.module.css'

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div>
            <div className={css.box}>
                <div className={css.h103}>
                    <h2>ID: {id}</h2>
                    <h3>Name: {name}</h3>
                </div>
                <div className={css.right}><Button to={`${id}`} state={user}>Get Details</Button></div>
            </div>
        </div>
    );
};

export {User};