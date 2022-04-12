import {useEffect, useState} from "react";
import {userService} from "../Services";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setComments(data))
    },[])
    return (
        <div>
            {/*{comments.map(value => <div>{value.name} -- {value.email} -- {value.body}</div>)}*/}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};