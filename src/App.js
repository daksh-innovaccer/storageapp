import './App.css';

import { useState, useEffect, Fragment } from "react";
import Login from "./Components/Login/Login"
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
// import UserData from "./Components/RefFile/UserData"
import { Routes, Route } from "react-router-dom";
import Users from './Components/User/Users';
import Profile from "./Components/User/Profile"

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const localStorageData = localStorage.getItem('userLoginState')
        if (localStorageData === 'LOGGED_IN') {
            setIsLoggedIn(true)
        }
    }, []) // first parament is function (which is causing error), [] are dependencies

    const LoginHandler = (email, password) => {
        console.log(email, password)
        setIsLoggedIn(true)
        localStorage.setItem('userLoginState', 'LOGGED_IN')
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('userLoginState')
        //localStorage.setItem('userLogoutState', 'LOGGED_OUT')
    }

    return (
        <Fragment>
            <Header userLoggedIn={isLoggedIn} onLogoutClick={logoutHandler} />
            <main>
                {!isLoggedIn ? <Login onLoginClick={LoginHandler} /> : <Home onLogoutClick={logoutHandler} />}
                {/* {isLoggedIn ? <Home /> : ""} */}
            </main>
            <Routes>
                <Route path='/users' element={<Users />} />
                <Route path='/profile' element={<Profile />}/>
            </Routes>
            {/* <UserData /> */}
        </Fragment>
    );
}

export default App;
