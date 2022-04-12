import './App.css'
import {Comments, Posts, Users} from "./Components";

const App = () => {
    return (
        <div>
            <div className={'flex'}>
                <div className={'a1'}>
                    <h2>Users</h2>
                    <Users/>
                </div>
                <div className={'a1'}>
                    <h2>Posts</h2>
                    <Posts/>
                </div>
            </div>
            <div className={'center'}>
                <div className={'a1'}>
                    <h2>Comments</h2>
                    <Comments/>
                </div>
            </div>
        </div>
    );
};

export default App;