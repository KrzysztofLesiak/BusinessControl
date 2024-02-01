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
    handleLoginInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleLogin: (e: FormEvent<HTMLFormElement>) => void
    loginNavigation: () => void
}

export const useUsers = (): UseUsersData => {
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    })

    const user = useAppSelector((state) => state.users.user)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
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
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/login')
    }

    const loginNavigation = () => {
        user.user_id ? handleLogout() : navigate('/login')
    }

    return {
        inputValue,
        handleLoginInput,
        handleLogin,
        loginNavigation,
    }
}
