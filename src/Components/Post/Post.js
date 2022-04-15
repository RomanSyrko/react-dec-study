import {Button} from "../Button/Button";
import css from './Post.module.css'

const Post = ({post}) => {

    const {id, title, body} = post;

    return (
        <div>
            <div className={css.box}>
                <div className={css.h153}>
                    <h2>ID: {id}</h2>
                    <h3>Title: {title}</h3>
                    <p>{body}</p>
                </div>
                <div className={css.right}>
                    <Button to={id.toString()} state={post}>Get Details</Button>
                </div>
            </div>
        </div>
    );
};

export {Post};