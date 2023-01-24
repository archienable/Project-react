import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs dialogs={props.appState.profilePage.dialogs} messages={props.appState.messagesPage.messages} />} />
                        <Route path='/dialogs/:id' element={<Dialogs dialogs={props.appState.profilePage.dialogs} messages={props.appState.messagesPage.messages} />} />
                        <Route path='/profile' element={<Profile posts={props.appState.profilePage.posts} />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
