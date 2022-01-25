import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GoHome.css';


// Component to learn programmatic navigation
// It could have been implemented using the link component but we are oing to use history object to represent its usage
// history object is nothing but a stack
class GoHome extends Component {

    navigateToHome = () => {
        const { history } = this.props;
        history.push("/");
    };

    render() {
        const { location } = this.props;
        const whiteBtn = location.pathname === '/';

        return (
            <button className={`go-home-btn ${
                whiteBtn ? 'white-bkg' : 'gradient-bkg'
                }`} 
                onClick={this.navigateToHome}
            >
                <img 
                    className="home-icon"
                    src={whiteBtn ? homeIconBlack : homeIconWhite} 
                    alt="home-icon"
                />
            </button>
        );
    }
}

export default withRouter(GoHome);