import React from 'react';
import {CurrentUser, ReduxState} from "../types/typesForReduxUser";
import {useSelector} from "react-redux";
import {Outlet} from 'react-router-dom';
import Login from "../pages/Login";

const Guard = () => {

    const currentUser: (CurrentUser) = useSelector<ReduxState>(state => state.user) as CurrentUser

    return currentUser ? <Outlet/> : <Login/>
};

export default Guard;