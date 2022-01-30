import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import GoHome from "../GoHome/GoHome";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import './App.css';

const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <NavBar />
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/about' exact component={About}></Route>
                    <Route path='/projects' exact component={Projects}></Route>
                    <Route path='/skills' exact component={Skills}></Route>
                    <Route path='/blogs' exact component={Blog}></Route>
                    <Route path='/contact' exact component={Contact}></Route>
                    <GoHome/>                    
                </div>
            </HashRouter>
        </div>
    );
};

export default App;