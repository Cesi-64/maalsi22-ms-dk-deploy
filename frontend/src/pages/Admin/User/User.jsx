import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

import { userService } from "@/_services"

const User = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers()
            .then(res => setUsers(res.data.data))
            .catch(e => console.log('ERROR', e))

    }, [])

    const delUser = (userId) => {
        userService.deleteUser(userId)
            .then(res => {
                setUsers(current => current.filter(user => user.id !== userId))
            })
            .catch(e => console.log('ERROR', e))
    }

    return (
        <div>
            User List
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.email}>
                                <td><span className='del_btn' onClick={() => delUser(user.id)}>X</span></td>
                                <td><Link to={`/admin/user/edit/${user.id}`}>{user.id}</Link></td>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.email}</td>
                                <td>{dayjs(user.createdAt).format("DD/MM/YY HH:mm:ss")}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;