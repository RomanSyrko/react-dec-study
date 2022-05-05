import {useEffect, useState} from "react";

import {Comment} from "../../Components";
import {commentService} from "../../Services";
import css from './CommentsPage.module.css'

const CommentsPage = () => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComment(data))
    }, [])

    return (
        <div>
            <div className={css.commentsWrap}>
                {comment.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {CommentsPage};