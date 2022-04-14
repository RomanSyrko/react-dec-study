const Comment = ({comment}) => {

    const {id, name, email, body} = comment;

    return (
        <div>
            <h2>ID: {id}</h2>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {Comment};