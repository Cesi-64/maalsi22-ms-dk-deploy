import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import UserForm from "@components/admin/UserForm"

import { userService } from '@/_services'

const UserAdd = () => {
    let navigate = useNavigate()

    const [user, setUser] = useState({})

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        userService.addUser(user)
            .then(res => navigate('../index'))
            .catch(e => console.log('ERROR', e))

    }

    return (
        <div>
            User Add
            <UserForm data={user} onChange={onChange} onSubmit={onSubmit} text="Ajouter"/>
        </div>
    );
};

export default UserAdd;