import css from "./Comments.module.css";

const Comment = ({comment}) => {

    const {id, name, email, body} = comment;

    return (
        <div>
            <div className={css.commentBox}>
                <h2>ID: {id}</h2>
                <h3>Name: {name}</h3>
                <h3>Email: {email}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
};

export {Comment};