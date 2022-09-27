import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Header: FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/login'>Вход</NavLink></li>
                    <li><NavLink to='/contacts'>Контакты</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;