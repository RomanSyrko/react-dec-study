const Post = ({post: {id, title, body}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <p>{body}</p>
        </div>
    );
};

export {Post};