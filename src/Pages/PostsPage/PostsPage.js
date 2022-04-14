import {useEffect, useState} from "react";

import {Post} from "../../Components";
import {postService} from "../../Services";

const PostsPage = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPost(data))
    }, [])

    return (
        <div>
            {post.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};