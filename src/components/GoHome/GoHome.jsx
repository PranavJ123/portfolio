import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './GoHome.css';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';

const GoHome = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToHome = () => {
        navigate('/');
    }

    const whiteBtn = location.pathname === '/';

    return (
        <button className={`go-home-btn ${whiteBtn ? 'white-bkg' : 'gradient-bkg'}`} onClick={navigateToHome}>
            <img src={whiteBtn ? homeIconBlack : homeIconWhite} alt="home-icon" className="home-icon" />
        </button>
    );
}

export default GoHome;
