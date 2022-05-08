import {Route, Routes} from "react-router-dom";
import './App.css';

import Homepage from "./pages/Homepage/Homepage";
import SignIn from "./pages/SIgnIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Activities from "./pages/Activities/Activities";
import Tutorial from "./pages/Tutorial/Tutorial";
import Rating from "./pages/Rating/Rating";
import FormPage from "./pages/FormPage/FormPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="activities" element={<Activities/>}/>
        <Route path="tutorial" element={<Tutorial/>}/>
        <Route path="rating" element={<Rating/>}/>
        <Route path="form" element={<FormPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
