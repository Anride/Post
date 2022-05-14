import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddPost from "./components/AddPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Post from "./components/Post";
// import Main from "./components/Main";



export default () => {
    const [posts, getPosts] = useState([]);
    const user = localStorage.getItem("user");
    let token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
            fetch("https://api.react-learning.ru/posts", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then(o => o.json())
                .then(data => {
                    console.log(data);
                //     let p = [];
                // for (let i = 0; i < data.length; i++) {
                //     if (i % 16 === 0) {
                //         p.push([])
                //     }
                //     p[p.length - 1].push(data[i]);
                // }
                // getPosts(p);
                    data.forEach(d => {
                        console.log(d.tags);
                    })
                    getPosts(data.reverse());
                })
        }
    }, []);

    const deletePost = (e) => {
        let id = e.target.id;
        console.log(id);
        fetch(`https://api.react-learning.ru/posts/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res => res.json()).then(ans => {
            console.log(ans);
            getPosts(prev => prev.filter(post => post._id !== id));
        })
    }
    return <>
        <BrowserRouter>
            <Header />
            <nav>
                <Link to="/"><button class="button-1">Главная</button></Link>
                <Link to="/add"><button class="button-1">Добавить пост</button></Link>
            </nav>
            <Routes>

            {/* <Route path="/" element={<div className="wrap">{posts[0].map(p => <div className="post" key={p._id}>{p.title}</div>)}</div>}/>
                {posts.map((p, i) => <Route path={"/"+(i+1)} element={<div className="wrap">{p.map(post => <div className="post" key={post._id}>{post.title}</div>)}</div>}/>)} */}






                
                <Route path="/" element={<div>
                        <div className="ttt"> <h1>Мои посты</h1> </div>

                        <div className="sss">
                        {posts.map((post, i) => <div key={i} className="post">
                            <img src={post.image}/>
                            {post.title}
                            {post.author._id === user && <span className="delete" onClick={deletePost} id={post._id}>x</span>}
                        </div>)
                        // {posts.map((p, i) => <Route path={"/"+(i+1)} element={<div className="wrap">{p.map(post => <div className="post" key={post._id}>{post.title}</div>)}</div>}/>)}
                        }
                       </div>
                    </div>}/>
                    <Route path="/add" element={<AddPost update={getPosts}/>}/>
                </Routes>
                
                <div className="pages">
                {posts.map((post, i) => <Link to={"/"+(i+1)} className="page" key={i}>{i+1}</Link>)}
            </div>
                <Footer/>
            </BrowserRouter>
    </>
}
