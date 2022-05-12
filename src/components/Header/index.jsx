import React from 'react';
import './index.css';
import Logo from '../Logo';
import Search from '../Search';

const Header = () => {
    return(
        <header>
            <Logo />
            <div className='rrr'> 
            <Search/>
            {/* <a href='https://www.google.ru/'>Поиск</a> */}
            <a href='/'>Личный кабинет</a>
            </div>
        </header>
    )
}

export default Header;