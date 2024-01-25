import React from 'react';

import { Routes, Route } from 'react-router-dom'

import { ALayout, Dashboard } from '@pages/Admin'
import { User, UserAdd, UserEdit } from '@pages/Admin/User'
import { Cocktail, CocktailAdd, CocktailEdit } from '@pages/Admin/Cocktail'
import Error from '@pages/Error'


const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>} >
                <Route index element={<Dashboard/>} />
                <Route path="dashboard" element={<Dashboard/>}/>

                <Route path="user">
                    <Route path="index" element={<User/>}/>
                    <Route path="add" element={<UserAdd/>}/>
                    <Route path="edit/:uid" element={<UserEdit/>}/>
                </Route>

                <Route path="cocktail">
                    <Route path='index' element={<Cocktail/>}/>
                    <Route path="add" element={<CocktailAdd/>}/>
                    <Route path="edit/:cid" element={<CocktailEdit/>}/>
                </Route>

                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;