import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {Post} from "../../Components";
import {postService} from "../../Services";
import css from './PostsPage.module.css';

const PostsPage = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPost(data))
    }, [])

    return (
        <div className={css.flex}>
            <div className={css.wrap}>{post.map(post => <Post key={post.id} post={post}/>)}</div>
            <hr/>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};