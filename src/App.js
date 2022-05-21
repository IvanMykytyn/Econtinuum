import {Route, Routes} from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/SIgnIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Activities from "./pages/Activities/Activities";
import Tutorial from "./pages/Tutorial/Tutorial";
import Rating from "./pages/Rating/Rating";
import FormPage from "./pages/FormPage/FormPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useLayoutEffect} from "react";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/auth/auth.actions";

function App({setCurrentUser}) {
    useLayoutEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setCurrentUser(JSON.parse(user))
        }
    }, [setCurrentUser])

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="sign-in" element={<SignIn/>}/>
                <Route path="sign-up" element={<SignUp/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="activities" element={<Activities/>}/>
                <Route path="tutorial" element={<Tutorial/>}/>
                <Route path="rating" element={<Rating/>}/>
                <Route path="form" element={<FormPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
