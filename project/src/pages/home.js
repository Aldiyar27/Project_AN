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

    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const storedPosts = localStorage.getItem('posts');
      
      if (storedPosts) {
        const parsedPosts = JSON.parse(storedPosts);
        setNews(parsedPosts);
      }
    }, []);

    const [postComments, setPostComments] = useState({});

    useEffect(() => {
      const storedComments = localStorage.getItem('comments');
      if (storedComments) {
        const parsedComments = JSON.parse(storedComments);
        setPostComments(parsedComments);
      }
    }, []);

    function getUser(){
        const sign_users= JSON.parse(localStorage.getItem("signup_users")) || []
        const login_users= JSON.parse(localStorage.getItem("login_users")) || []

        const existingUser = sign_users.find(user => user.email === login_users.email)
        return existingUser;
    }

    const [comments, setComments] = useState([]);

    const isUserLoggedIn = () => {
      const loggedInUser = JSON.parse(localStorage.getItem("login_users"));
      return loggedInUser !== null;
  }

    const addComment = (index, comment) => {
      if (!isUserLoggedIn()) {
        alert("Пожалуйста, войдите в свой аккаунт, чтобы оставлять комментарии.");
        return;
        }
        const nickname = getUser().nickname;
        const newComment = {
            index: index,
            text: comment,
            author: nickname,
            date: new Date().toLocaleString(),
        };
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        setPostComments({ ...postComments, [index]: '' });

        localStorage.setItem('comments', JSON.stringify(updatedComments));
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
                <h1 className='head'>Home</h1>
                <div className='posts-container'>
                <div>
                {news.length > 0 ? (
                    news.map((post, index) => (
                    <div className='post-news' key={index}>
                      <div className='post-author' dangerouslySetInnerHTML={{ __html: "<b>Author: </b> @" + post.name}} />
                       <div className='new-time' dangerouslySetInnerHTML={{__html: post.date}} />
                       <div className='new-title' dangerouslySetInnerHTML={{__html: post.title}} />
                       <div className='news-text' dangerouslySetInnerHTML={{__html: post.text}} />
                        <div className='comment-box'>
                                <p>Comments:</p>
                                <div className='com'>
                                  <textarea
                                    className='comment' id='commentInput'
                                    value={postComments[index] || ''}
                                    onChange={(e) => {
                                      const newComment = e.target.value;
                                      setPostComments((prevComments) => ({
                                        ...prevComments,
                                        [index]: newComment,
                                      }));
                                    }}
                                  ></textarea>
                                  <button
                                    className='send'
                                    onClick={() => {
                                      const comment = postComments[index];
                                      if (comment) {
                                        addComment(index, comment);
                                      }
                                    }}
                                  >
                                    Send
                                  </button>
                                </div>
                            </div>
                            {comments.filter(comment => comment.index === index)
                            .map((comment, commentIndex) => (
                            <div className="commen" key={commentIndex}>
                              <div className='comment-author' dangerouslySetInnerHTML={{__html: "@" + comment.author}} />
                              <div className='comment-date' dangerouslySetInnerHTML={{__html: comment.date}} />
                              <div className='comment-text' dangerouslySetInnerHTML={{__html: comment.text}} />
                            </div>
                            ))}
                    </div>
                    ))
                ) : ("")}
                </div>
                    {posts.map((post, index) => {
                        return(
                        <div className='post-card' key={index}>
                            <img src={post.urlToImage} alt="" className='post-img'/>
                            <div className='post-title' dangerouslySetInnerHTML={{__html: post.title}} />
                            <div className='post-time' dangerouslySetInnerHTML={{__html: post.publishedAt}} />
                            <div className='post-author' dangerouslySetInnerHTML={{__html: "<b>Author: </b>" + post.author}} />
                            <div className='post-time' dangerouslySetInnerHTML={{__html: post.publishedAt}} />
                            <div className='post-text' dangerouslySetInnerHTML={{__html: post.content}} />
                            <div className='comment-box'>
                                <p>Comments:</p>
                                <div className='com'>
                                  <textarea
                                    className='comment' id='commentInput'
                                    value={postComments[index] || ''}
                                    onChange={(e) => {
                                      const newComment = e.target.value;
                                      setPostComments((prevComments) => ({
                                        ...prevComments,
                                        [index]: newComment,
                                      }));
                                    }}
                                  ></textarea>
                                  <button
                                    className='send'
                                    onClick={() => {
                                      const comment = postComments[index];
                                      if (comment) {
                                        addComment(index, comment);
                                      }
                                    }}
                                  >
                                    Send
                                  </button>
                                </div>
                            </div>
                            {comments.filter(comment => comment.index === index)
                            .map((comment, commentIndex) => (
                            <div className="commen" key={commentIndex}>
                              <div className='comment-author' dangerouslySetInnerHTML={{__html: "@" + comment.author}} />
                              <div className='comment-date' dangerouslySetInnerHTML={{__html: comment.date}} />
                              <div className='comment-text' dangerouslySetInnerHTML={{__html: comment.text}} />
                            </div>
                            ))}
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
