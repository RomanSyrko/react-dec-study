const PostDetails = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <h3>ID: {id}</h3>
            <h4>Title: {title}</h4>
            <p>body: {body}</p>
        </div>
    );
};

export {PostDetails};