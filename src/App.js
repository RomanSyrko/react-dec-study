import {Posts, UserDetails, Users} from "./Components";
import './App.css';
import {useState} from "react";
import {postService} from "./Services";

function App() {
    const [userDetails, setUserDetails] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUserId = async (userId) => {
        const {data} = await postService.getPostByUserId(userId);
        setPosts(data)
    }
    
    const trigger = () => {
        setPosts([])
    }
    
    return (
        <div className={'general'}>
            <div className={'wrap margin'}>
                <Users setUserDetails={setUserDetails} trigger={trigger}/>
                <hr/>
                {userDetails && <UserDetails userDetails={userDetails} getUserId={getUserId}/>}
            </div>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
}

export default App;
