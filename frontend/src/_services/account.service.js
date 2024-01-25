import Axios from './caller.service'
import { jwtDecode } from 'jwt-decode'

const login = (credentials) => {
    return Axios.post('auth/login', credentials)
}

const saveToken = (token) => {
    localStorage.setItem('token', token)
}

const getToken = () => {
    return localStorage.getItem('token')
}

const isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

const getTokenInfo = () => {
    return jwtDecode(getToken())
}

const logout = () => {
    localStorage.removeItem('token')
}

/**
 * Déclaration de service pour Import
 */
export const accountService = {
    login, saveToken, getToken, isLogged, getTokenInfo, logout
}