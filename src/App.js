import {Users} from "./Components";
import Posts from "./Components/Posts/Posts";
import './App.css';

function App() {
    return (
        <div>
            <div>
                <Users/>
                <button>Get Details</button>
            </div>
            <Posts/>
        </div>
    );
}

export default App;
