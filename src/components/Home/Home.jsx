import React, { Component} from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import homAnime from './../../assets/home_anime.gif';
import './Home.css';

class Home extends Component {
    state = { showModal: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showModal: true });
        }, 2400);
    }

    closeModal = () => {
        this.setState({ showModal: false })
    };

    render () {
        return(
            <div className="home-container">
                { this.state.showModal && <Modal closeModal={ this.closeModal }/> }
                <div className="header-text">
                    <h1>HELLO WORLD!</h1>
                    <p>This is Swapnil, full time CODER part time MUSICIAN!</p>
                </div>
                <div className="head-btns">
                    <Link to="/about" className="btn btn-white">
                        <p className="btn-text">Know more about me!</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Connect with me!</p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img src={homAnime} alt="animation" className="home-anime"/>
                </div>
            </div>
            
        );
    }
}

export default Home;