import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {CurrentUser, ReduxState} from "../types/typesForReduxUser";

const MainPage: FC = () => {

    const currentUser: (CurrentUser) = useSelector<ReduxState>(state => state.user) as CurrentUser

    return (
        <main>
            <div className='title'>
                <h1>Тестовое задание, сделать страницу входа, контактов и использовать Redux.</h1>
                <h3>В данной работе, очень много недочетов, котоыре были не сделаны(алерты, валидация и тд), по причине скорости выполнения данного ТЗ(1 день) и его условий, условия выше</h3>
            </div>
            <div className='text'>
                {(currentUser === null) && <h2>Вы не авторизованы</h2>}
            </div>
            <div className='text'>
                {
                    (currentUser) &&
                        <>
                            <h2>Вы авторизованы</h2>
                            <p>Ваши данные: </p>
                            <span>Имя: {currentUser.firstName ? currentUser.firstName : 'Не заполнено'}</span>
                            <span>Фамилия: {currentUser.lastName ? currentUser.lastName : 'Не заполнено'}</span>
                            <span>Название компании: {currentUser.companyName ? currentUser.companyName : 'Не заполнено'}</span>
                            <span>Телефон: {currentUser.phone ? currentUser.phone : 'Не заполнено'}</span>
                        </>
                }
            </div>
        </main>
    );
};

export default MainPage;