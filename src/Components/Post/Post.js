const Post = ({post}) => {

    const {id, title, body} = post;

    return (
        <div>
            <h2>ID: {id}</h2>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {Post};