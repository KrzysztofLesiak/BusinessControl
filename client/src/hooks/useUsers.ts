import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { loginUser, logoutUser } from '../redux/slice/usersSlice'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { NewUserType, useRegisterUserMutation } from '../redux/services/users'

type UseUsersData = {
    inputValue: {
        email: string
        password: string
    }
    registerInputValue: NewUserType
    isRegisterSuccess: boolean
    isRegisterLoading: boolean
    isRegisterError: boolean
    handleAuthInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleRegisterInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleLogin: (e: FormEvent<HTMLFormElement>) => void
    handleRegister: (e: FormEvent<HTMLFormElement>) => void
    loginNavigation: () => void
    checkAuth: () => void
}

export const useUsers = (): UseUsersData => {
    const [inputValue, setInputValue] = useState({
        email: 'test@test.pl',
        password: 'Lodoweczka0211',
    })
    const [registerInputValue, setRegisterInputValue] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
    })

    const [
        registerUser,
        {
            isSuccess: isRegisterSuccess,
            isLoading: isRegisterLoading,
            isError: isRegisterError,
        },
    ] = useRegisterUserMutation()

    const { user } = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const handleAuthInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInputValue((prev) => ({ ...prev, [name]: value }))
    }

    const handleRegisterInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterInputValue((prev) => ({ ...prev, [name]: value }))
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

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isRegisterLoading || isRegisterSuccess) return

        registerUser(registerInputValue)
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
        registerInputValue,
        isRegisterSuccess,
        isRegisterLoading,
        isRegisterError,
        handleRegisterInput,
        handleRegister,
        handleAuthInput,
        handleLogin,
        loginNavigation,
        checkAuth,
    }
}
