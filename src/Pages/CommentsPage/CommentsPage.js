import {useEffect, useState} from "react";

import {Comment} from "../../Components";
import {commentService} from "../../Services";

const CommentsPage = () => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComment(data))
    }, [])

    return (
        <div>
            {comment.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};