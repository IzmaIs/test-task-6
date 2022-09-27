import React, {FC} from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";

const Layout: FC = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;