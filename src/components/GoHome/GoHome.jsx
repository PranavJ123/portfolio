import React, {Component} from 'react';
import { withRouter } from 'react-router';
import './GoHome.css';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';

class GoHome extends Component{
    navigateToHome = ()=>{
        const {history} = this.props;
        history.push('/');
    }
    render(){
        const {location} = this.props;
        const whiteBtn = location.pathname === '/';
        return(
            <button className={`go-home-btn ${whiteBtn ? 'white-bkg' : 'gradient-bkg'}`} onClick={this.navigateToHome}>
            <img src={whiteBtn ? homeIconBlack : homeIconWhite} alt="home-icon" className="home-icon"  />
            </button>
        )
    }
}

export default withRouter(GoHome);