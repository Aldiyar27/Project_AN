import React, { useEffect } from "react";
import '../css/menu.css';
import '../css/registration.css';
import logo from '../img/logo.png';
import '../fonts/Kanit/Kanit-Medium.ttf'
import home_img from '../img/home.png';
import profile_img from '../img/profile.png';
import more_img from '../img/more.png';

const Login = () => {

    const handleClick = () => {
        const users= JSON.parse(localStorage.getItem("signup_users")) || []
        
        const email = document.getElementById('emailInput').value
        const password = document.getElementById('passwordInput').value

        const Email = users.find(user => user.email === email)
        const Password = users.find(user => user.password === password)
        
        if(Email && Password){
            alert("Успешный вход")
            const User = {email, password}
            localStorage.setItem('login_users', JSON.stringify(User))
            window.location.href = "/profile"
        }
        else{
            alert("Неверный логин или пароль")
        }

        document.getElementById('emailInput').value = '';
        document.getElementById('passwordInput').value = '';
    };

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
                    <input type="text" placeholder="email" class="text-input" id="emailInput"/>
                    <input type="password" placeholder="Password" class="text-input" id="passwordInput"/>
                    <button class="btnRegister" onClick={handleClick}>Login</button>
                </div>
            </div>
        </div>
        <div className="line2"></div>
        </div>
    );
};

export default Login;