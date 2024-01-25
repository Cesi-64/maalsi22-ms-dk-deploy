import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

import { userService } from '@/_services'

import UserForm from '@components/admin/UserForm'

const UserEdit = () => {
    let navigate = useNavigate()
    const { uid } = useParams()

    const [user, setUser] = useState({})

    useEffect(() => {
        userService.getOneUser(uid)
            .then(res => setUser(res.data.data))
            .catch(e => console.log('ERROR', e))
    }, [])

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        userService.updateUser(user)
            .then(res => navigate('../index'))
            .catch(e => console.log('ERROR', e))

    }

    return (
        <div>
            User Edit
            <UserForm data={user} onChange={onChange} onSubmit={onSubmit} text="Modifier"/>
        </div>
    );
};

export default UserEdit;