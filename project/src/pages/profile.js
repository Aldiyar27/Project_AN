import React, { useEffect } from "react";
import '../css/menu.css';
import '../css/profile.css';
import logo from '../img/logo.png';
import '../fonts/Kanit/Kanit-Medium.ttf'
import home_img from '../img/home.png';
import profile_img from '../img/profile.png';
import more_img from '../img/more.png';

const Profile = () => {
    // const [User, setUser] = useState({
    //     name: "",
    //     nickname: "",
    //     email: "", 
    //     password: "",
    // });

    function Profile(){
        const users= localStorage.getItem("login_users")
        if(users == null){
            window.location.href = "/registration"
        }
    }
    function getUser(){
        const sign_users= JSON.parse(localStorage.getItem("signup_users")) || []
        const login_users= JSON.parse(localStorage.getItem("login_users")) || []

        const existingUser = sign_users.find(user => user.email === login_users.email)
        return existingUser;
    }

    const Exit = () => {
        localStorage.removeItem('login_users')
        window.location.href = "/registration"
    }

    function Post(){
        const posts = JSON.parse(localStorage.getItem("posts")) || []
        const text = document.getElementById('textInput').value
        const title = document.getElementById('titleInput').value
        const name = getUser().nickname;
        const date = new Date().toLocaleString();
        const newPost = {name, text, date, title}

        posts.push(newPost)
        
        localStorage.setItem('posts', JSON.stringify(posts))
        alert("Post loaded!")
        document.getElementById('textInput').value = "";
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
                    <a href={'/profile'} onClick={Profile()}><li className="profile"> <img src={profile_img} alt=""/> Profile </li></a>
                    <a href={'/more'}><li className="more"><img src={more_img} alt=""/> More</li></a>
                </ul> 
            </div>
            <div className="line1"></div>
        </header>
        <div className='body'>
            <h1 className='head'>Profile</h1>
            <div className='profile-page'>
                <div className='block'></div>
                <div className='photo'></div>
                <p className='name'>{getUser().name}</p>
                <p className='nickname'>@{getUser().nickname}</p> 
            </div>

            <div className='new-post-container'>
            <p>Write your news...</p>
            <div className='text-box'>
                <textarea placeholder="Title" className='title' id='titleInput'></textarea>
                <textarea  placeholder="Text" className='text' id='textInput'></textarea>
            </div>
            <button className='post' onClick={Post}>Post</button>
        </div>
        <a href={'/registration'} className='exit' onClick={Exit}>Exit</a>
        </div>

        <div className="line2"></div>
        </div>
    );
};

export default Profile;