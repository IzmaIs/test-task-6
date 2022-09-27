import React, {FC, useState} from 'react';
import {ReduxState, setCurrentUser, CurrentUser} from "../types/typesForReduxUser";
import {onInputHandler} from "../helpers/onInputHandler";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import actionsUser from '../store/actions/currentUser'

const Login: FC = () => {

    const dispatch = useDispatch()
    const {setNewUser, resetUsers} = bindActionCreators(actionsUser, dispatch)
    const [userData, setUserData] = useState<setCurrentUser>({
        phone: undefined,
        companyName: "",
        firstName: "",
        lastName: ""
    })
    const currentUser: (CurrentUser) = useSelector<ReduxState>(state => state?.user) as CurrentUser

    if (currentUser === null)
        return (
            <div className='login'>
                <div className='login__form'>
                    <form>
                        <div>
                            <label>
                                <div>
                                    Имя
                                </div>
                                <input
                                    type='text'
                                    name='firstName'
                                    value={userData.firstName}
                                    onChange={e => onInputHandler(e, setUserData)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <div>
                                    Фамилия
                                </div>
                                <input
                                    type='text'
                                    name='lastName'
                                    value={userData.lastName}
                                    onChange={e => onInputHandler(e, setUserData)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <div>
                                    Название компании
                                </div>
                                <input
                                    type='text'
                                    name='companyName'
                                    value={userData.companyName}
                                    onChange={e => onInputHandler(e, setUserData)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <div>
                                    Номер телефона
                                </div>
                                <input
                                    type='phone'
                                    name='phone'
                                    value={userData.phone || ''}
                                    onChange={e => onInputHandler(e, setUserData, true)}
                                />
                            </label>
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setNewUser(userData)
                            }}
                        >
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        )
    else {
        return (
            <div className='login'>
                <h1>Вы вошли</h1>
                <button
                    onClick={() => {
                        resetUsers()
                    }}
                >
                    Выйти
                </button>
            </div>
        )
    }
};

export default Login;