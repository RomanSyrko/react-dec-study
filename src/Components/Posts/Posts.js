import {Post} from "../Post";

const Posts = ({posts}) => {
    return (
        <div className={'margin'}>
            {<h2>Posts:</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts}
