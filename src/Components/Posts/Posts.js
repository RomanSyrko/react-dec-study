import React, {useEffect, useState} from "react";
import {postService} from "../../Services";
import {Post} from "../Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts
