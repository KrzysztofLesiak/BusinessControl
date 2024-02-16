import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { loginUser, logoutUser, setToken } from '../redux/slice/usersSlice'
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
    passwordValidation: {
        length: boolean
        uppercase: boolean
        lowercase: boolean
        digit: boolean
        symbols: boolean
    }
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
    const [passwordValidation, setPasswordValidation] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        digit: false,
        symbols: false,
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
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

    const handleAuthInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInputValue((prev) => ({ ...prev, [name]: value }))
    }

    const handleRegisterInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (name === 'password') {
            value.match(/^(?=.*\d)/)
                ? setPasswordValidation((prev) => ({ ...prev, digit: true }))
                : setPasswordValidation((prev) => ({ ...prev, digit: false }))
            value.match(/^(?=.*[a-z])/)
                ? setPasswordValidation((prev) => ({
                      ...prev,
                      lowercase: true,
                  }))
                : setPasswordValidation((prev) => ({
                      ...prev,
                      lowercase: false,
                  }))
            value.match(/^(?=.*[A-Z])/)
                ? setPasswordValidation((prev) => ({
                      ...prev,
                      uppercase: true,
                  }))
                : setPasswordValidation((prev) => ({
                      ...prev,
                      uppercase: false,
                  }))
            value.length > 5
                ? setPasswordValidation((prev) => ({
                      ...prev,
                      length: true,
                  }))
                : setPasswordValidation((prev) => ({
                      ...prev,
                      length: false,
                  }))

            return setRegisterInputValue((prev) => ({
                ...prev,
                password: value.trim(),
            }))
        }

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
            dispatch(setToken(data.access))
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
        if (
            isRegisterLoading ||
            isRegisterSuccess ||
            !registerInputValue.password.match(passwordRegex)
        )
            return

        registerUser(registerInputValue)
    }

    const loginNavigation = () => {
        user.user_id ? handleLogout() : navigate('/login')
    }

    const checkAuth = () => {
        const token = localStorage.getItem('authToken')

        if (token) {
            dispatch(loginUser(jwtDecode(token)))
            dispatch(setToken(token))
        } else {
            navigate('/login')
        }
    }

    return {
        inputValue,
        registerInputValue,
        isRegisterSuccess,
        isRegisterLoading,
        isRegisterError,
        passwordValidation,
        handleRegisterInput,
        handleRegister,
        handleAuthInput,
        handleLogin,
        loginNavigation,
        checkAuth,
    }
}
