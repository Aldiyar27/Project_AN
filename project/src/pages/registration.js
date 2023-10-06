import React from 'react';
import '../css/menu.css';
import '../css/registration.css';
import logo from '../img/logo.png';
import '../fonts/Kanit/Kanit-Medium.ttf'
import home_img from '../img/home.png';
import profile_img from '../img/profile.png';
import more_img from '../img/more.png'

const Regis = () => {
    return (
        <div className='html'>
        <header>
            <div className="items">
                <div className="logo">
                    <a href={'/home'}>
                        <img src={logo} alt=""/>
                    </a>
                </div>
                <ul>
                    <a href={'/home'}><li className="home"><img src={home_img} alt=""/> Home </li></a>
                    <a href={'/profile'}><li className="profile"> <img src={profile_img} alt=""/> Profile </li></a>
                    <a href={'/more'}><li className="more"><img src={more_img} alt=""/> More</li></a>
                </ul> 
            </div>
            <div className="line1"></div>
        </header>
        <div className='body'>
        <h1 className='head'>Registration</h1>
            <div class="login-page">
                <div class="form-regis">
                    <h4>SignUp</h4>
                    <input type="text" placeholder="Name" class="text-input" id="nameInput"/>
                    <input type="text" placeholder="Nickname" class="text-input" id="nicknameInput"/>
                    <input type="text" placeholder="email" class="text-input" id="emailInput"/>
                    <input type="password" placeholder="Password" class="text-input" id="passwordInput"/>
                    <button class="btnRegister">SignUp</button>
                    <a class="sign" href="/profile"> loign... </a>
                </div>
            </div>
        </div>
        <div className="line2"></div>
        </div>
    );
};

export default Regis;