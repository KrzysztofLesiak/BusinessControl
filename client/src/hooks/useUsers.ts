import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { loginUser, logoutUser } from '../redux/slice/usersSlice'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

type UseUsersData = {
    inputValue: {
        email: string
        password: string
    }
    handleAuthInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleLogin: (e: FormEvent<HTMLFormElement>) => void
    loginNavigation: () => void
    checkAuth: () => void
}

export const useUsers = (): UseUsersData => {
    const [inputValue, setInputValue] = useState({
        email: 'test@test.pl',
        password: 'Lodoweczka0211',
    })

    const { user } = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const handleAuthInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInputValue((prev) => ({ ...prev, [name]: value }))
    }

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('http://127.0.0.1:8000/users/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: inputValue.email,
                    password: inputValue.password,
                }),
            })

            if (!response.ok)
                throw new Error(`${response.status} - ${response.statusText}`)

            const data = await response.json()

            dispatch(loginUser(jwtDecode(data.access)))
            localStorage.setItem('authToken', data.access)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = () => {
        dispatch(logoutUser())
        localStorage.removeItem('authToken')
        navigate('/login')
    }

    const loginNavigation = () => {
        user.user_id ? handleLogout() : navigate('/login')
    }

    const checkAuth = () => {
        const token = localStorage.getItem('authToken')

        token ? dispatch(loginUser(jwtDecode(token))) : navigate('/login')
    }

    return {
        inputValue,
        handleAuthInput,
        handleLogin,
        loginNavigation,
        checkAuth,
    }
}
