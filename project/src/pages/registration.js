import React, { useEffect } from "react";
import '../css/menu.css';
import '../css/registration.css';
import logo from '../img/logo.png';
import '../fonts/Kanit/Kanit-Medium.ttf'
import home_img from '../img/home.png';
import profile_img from '../img/profile.png';
import more_img from '../img/more.png';

const Regis = () => {

    function registerUser(name, nickname, email, password){
        const users= JSON.parse(localStorage.getItem("signup_users")) || []
    
        const existingUser = users.find(user => user.email === email)
        if(existingUser){
            alert("Пользователь с таким email-ом уже зарегистрирован")
            return;
        }
    
        const newUsers = {name, nickname, email, password}
        
        users.push(newUsers)
        
        localStorage.setItem('signup_users', JSON.stringify(users))
        localStorage.removeItem('login_users')
        localStorage.setItem('login_users', JSON.stringify(newUsers))

    
        alert("Регистрация успешно!")
        window.location.href = "/profile"
    }

    const handleClick = () => {
        const name = document.getElementById('nameInput').value
        const nickname = document.getElementById('nicknameInput').value
        const email = document.getElementById('emailInput').value
        const password = document.getElementById('passwordInput').value
        if(email !== '' && password !== '' && name !== '' && nickname !== ''){
            if(/@/.test(email)){
                if(password.length < 8 || password.length > 20){
                    alert('Некорректный пароль')
                }
                else{
                    registerUser(name, nickname, email, password)
                }
            }
            else{
                alert('Некорректный email')
            }
        }
        else{
            alert('Вы не ввели полные данные!')
        }
    }

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
                    <button class="btnRegister" onClick={handleClick}>SignUp</button>
                    <a class="login" href="/login"> loign... </a>
                </div>
            </div>
        </div>
        <div className="line2"></div>
        </div>
    );
};

export default Regis;