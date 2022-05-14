// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import api from "../../Api";
// import './index.css';


// const Post = (props) => {
//     const [title, setTitle] = useState("");
//     const [text, setText] = useState("");
//     const [img, setImg] = useState("");

//     const sendForm = (e) => {
//         e.preventDefault();
//         console.log("Форма не ушла =)");
//         console.log(title);
//         console.log(text);
//         setTitle("");
//         setText("");
//         let token = localStorage.getItem("token");
//         let body = {
//             "title": title,
//             "text": text
//         }
//         if (img) {
//             body.image = img
//         }
//         fetch("https://api.react-learning.ru/posts", {
//             method: "POST",
//             headers: {
//                 authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(body)
//         })
//             .then(res => res.json())
//             .then(ans => {
//                 console.log(ans);
//                 update(prev => [...prev, ans]);
//             })

//     const [posts, setPosts] = useState([[]]);
//     useEffect(() => {
//         api.getPosts()
//             .then(ans => {
//                 console.log(ans);
//                 let p = [];
//                 for (let i = 0; i < ans.length; i++) {
//                     if (i % 16 === 0) {
//                         p.push([])
//                     }
//                     p[p.length - 1].push(ans[i]);
//                 }
//                 console.log(p);
//                 setPosts(p);
//             })
//     }, [])
//     return <>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<div className="wrap">{posts[0].map(p => <div className="post" key={p._id}>{p.title}{p.image}</div>)}</div>} />
//                 {posts.map((p, i) => <Route path={"/" + (i + 1)} element={<div className="wrap">{p.map(post => <div className="post" key={post._id}>{post.title}</div>)}</div>} />)}
//             </Routes>
//             <div className="pages">
//                 {posts.map((p, i) => <Link to={"/" + (i + 1)} className="page" key={i}>{i + 1}</Link>)}
//             </div>
//         </BrowserRouter>

//     </>
// }

// export default Post;