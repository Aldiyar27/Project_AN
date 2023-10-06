import React, { useState, useEffect } from 'react';
import '../css/menu.css';
import '../css/home.css';
import logo from '../img/logo.png';
import '../fonts/Kanit/Kanit-Medium.ttf'
import home_img from '../img/home.png';
import profile_img from '../img/profile.png';
import more_img from '../img/more.png';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect( ()=>{
        fetch('https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=fd796114753e443ab0803915cf50e11b')
        .then((response) => response.json())
        .then((data) => {
            setPosts(data.articles);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }, []);
    
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
                <h1 className='head'>Home</h1>
                <div className='posts-container'>
                    {posts.map((post, index) => {
                        return(
                        <div className='post-card' key={index}>
                            <img src={post.urlToImage} alt="" className='post-img'/>
                            <p className='post-title'>{post.title}</p>
                            <p className='post-author'><b>Author: </b>{post.author}</p>
                            <a href='/post' className='post-button'>Read more</a>
                        </div>
                        );
                    })}
                </div>
            </div>
            <div className="line2"></div>
        </div>
    );
};

export default Home;