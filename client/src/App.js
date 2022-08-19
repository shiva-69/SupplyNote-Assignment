import React from "react";
import {Navbar} from "./Components/Navbar";
import { Login } from "./Pages/Login"
import { SignUp } from "./Pages/Signup"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
