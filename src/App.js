import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {CarPage, LoginPage, RegisterPage} from "./pages";
import {RequireAuth} from "./hoc";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<RequireAuth><CarPage/></RequireAuth>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>

            </Route>
        </Routes>
    );
}

export default App;
