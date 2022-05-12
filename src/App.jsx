import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
// import Main from "./components/Main";


export default () => {
    
    return (
        <div className="container">
            <Header />
            <div className="ttt" >
            <h2> Мои  посты </h2>
            </div>
            <Post/>           
            <Footer />
        </div>
    )
}
