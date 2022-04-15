import {Routes, Route, Navigate} from "react-router-dom"
import {MainLayout} from "./Layouts";
import {
    AboutPage,
    CommentsPage,
    HomePage,
    PageNotFound,
    PostsPage,
    SinglePostPage,
    SingleUserPage,
    UsersPage
} from "./Pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':userID'} element={<SingleUserPage/>}/>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':postID'} element={<SinglePostPage/>}/>
                </Route>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<PageNotFound/>}/>
            </Route>
        </Routes>
    )
        ;
}

export default App;
