import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import api from "../../Api";
import './index.css';


const Post = (props) => {
    //     const [posts, getPosts] = useState([]);

    //     useEffect(() => {
    //         let token = localStorage.getItem('token');
    //         if (token) {
    //             fetch('https://api.react-learning.ru/posts', {
    //                 headers: {
    //                     authorization: `Bearer ${token}`
    //                 }
    //             })
    //                 .then(res => res.json())
    //                 .then(ans => {
    //                     console.log(ans);
    //                     getPosts(ans);
    //                 });
    //         }
    //     }, []);


    //     return (

    //         <div className="sss">
    //         {posts.map((post, i) => <div key={i} className='post'>({post.title})</div>)}
    //         </div>



    //     )
    // }

    const [posts, setPosts] = useState([[]]);
    useEffect(() => {
        api.getPosts()
            .then(ans => {
                console.log(ans);
                let p = [];
                for (let i = 0; i < ans.length; i++) {
                    if (i % 16 === 0) {
                        p.push([])
                    }
                    p[p.length - 1].push(ans[i]);
                }
                console.log(p);
                setPosts(p);
            })
    }, [])
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className="wrap">{posts[0].map(p => <div className="post" key={p._id}>{p.title}</div>)}</div>} />
                {posts.map((p, i) => <Route path={"/" + (i + 1)} element={<div className="wrap">{p.map(post => <div className="post" key={post._id}>{post.title}</div>)}</div>} />)}
            </Routes>
            <div className="pages">
                {posts.map((p, i) => <Link to={"/" + (i + 1)} className="page" key={i}>{i + 1}</Link>)}
            </div>
        </BrowserRouter>

    </>
}

export default Post;