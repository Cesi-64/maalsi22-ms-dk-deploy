import Axios from './caller.service'

const getAllUsers = () => {
    return Axios.get('/users')
}

const getOneUser = (uid) => {
    return Axios.get('/users/'+uid)
}

const addUser = (user) => {
    return Axios.put('/users', user)
}

const updateUser = (user) => {
    return Axios.patch('/users/'+user.id, user)
}

const deleteUser = (uid) => {
    return Axios.delete('/users/'+uid)
}

export const userService = {
    getAllUsers, getOneUser, addUser, updateUser, deleteUser
}