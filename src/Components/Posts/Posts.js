import {useEffect, useState} from "react";
import {userService} from "../Services";
import {Post} from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setPosts(data))
    },[])

    return (
        <div>
            {/*{posts.map(value => <div>{value.id} -- {value.title}</div>)}*/}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};