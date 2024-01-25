import React from 'react';

import { Outlet } from 'react-router-dom'
import Header from '@components/public/Header';

import './public.css'

const Layout = () => {
    return (
        <>
            <Header/>

            <Outlet/>
        </>
    );
};

export default Layout;