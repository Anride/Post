import React from 'react';
import Logo from '../Logo';
import './index.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <Logo />
                <p>&copy;2022</p>
            </div>
            <nav>
                <a href="/">Сайт с Постами</a>
                {/* <a href="">link</a>
                <a href="">link</a>
                <a href="">link</a> */}
            </nav>
            <ul>
                <li><a href=".">Личный кабинет</a></li>
                {/* <li><a href="">link</a></li>
                <li><a href="">link</a></li>
                <li><a href="">link</a></li> */}
            </ul>

            <div>
                <h4>Мы на связи</h4>
                <a href='#'>+7(800)555-35-35</a>
                <a href='#'>trenttenttent@gmail.com</a>
                <ul className="soc">
                    <li><a href="https://vk.com" >Vkontakte</a></li>
                    <li><a href="https://developer.mozilla.org/ru/">MDN</a></li>
                    {/* <form className='form_w' novalidate="novalidate">
                        <div className='form_dis'>Подпишитесь на рассылку с новостями сайта</div>
                        <div className='form_d'>
                            <input placeholder='Ваш e-mail' type={text} name='email' required className='form_btn'/>
                        </div>
                        
                    </form> */}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;