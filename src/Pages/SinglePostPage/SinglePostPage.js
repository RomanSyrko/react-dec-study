import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../Services";
import {PostDetails} from "../../Components";
import css from './SinglePostPage.module.css'


const SinglePostPage = () => {
    const [post, setPost] = useState([]);
    const {postID} = useParams();
    useEffect(() => {
        postService.getById(postID).then(({data}) => setPost(data))
    }, [postID])

    return (
        <div className={css.box}>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};