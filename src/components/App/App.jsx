import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import './App.css';


const App = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/projects' element={<Projects/>}></Route>
                        <Route path='/skills' element={<Skills/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                    </Routes>
                    
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;