import React from "react";
import '../css/menu.css';
import logo from '../img/logo.png';
import '../fonts/Kanit/Kanit-Medium.ttf'
import home_img from '../img/home.png';
import profile_img from '../img/profile.png';
import more_img from '../img/more.png';

const Post = () => {
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
        </div>
    );
};

export default Post;