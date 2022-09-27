import React, {FC} from 'react';
import {Route, Routes } from 'react-router-dom';
import MainPage from "../pages/MainPage";
import Layout from "../layout/Layout";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import Guard from "./Guard";

const AppRouter: FC = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route element={<Guard/>}>
                    <Route path='/contacts' element={<Contacts/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRouter;