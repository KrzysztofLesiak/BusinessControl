import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login, logout, setToken } from '../redux/slice/usersSlice'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import {
    NewUser,
    useGetTokenMutation,
    useRegisterUserMutation,
} from '../redux/services/users'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { SerializedError } from '@reduxjs/toolkit/react'

export type RegisterValidationType = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    other: string
}

type UseUsersData = {
    inputValue: {
        email: string
        password: string
    }
    registerInputValue: NewUser
    isRegisterSuccess: boolean
    isRegisterLoading: boolean
    isRegisterError: boolean
    isLoginError: boolean
    isLoginLoading: boolean
    isLoginSuccess: boolean
    loginResponseError: FetchBaseQueryError | SerializedError | undefined
    passwordValidation: {
        length: boolean
        uppercase: boolean
        lowercase: boolean
        digit: boolean
        symbols: boolean
    }
    registerValidation: RegisterValidationType
    registerResponseError: FetchBaseQueryError | SerializedError | undefined
    handleAuthInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleRegisterInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleLogin: (e: FormEvent<HTMLFormElement>) => void
    handleRegister: (e: FormEvent<HTMLFormElement>) => void
    loginNavigation: () => void
    checkAuth: () => void
    setRegisterValidation: React.Dispatch<
        React.SetStateAction<{
            firstName: string
            lastName: string
            email: string
            password: string
            confirmPassword: string
            other: string
        }>
    >
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

    const [registerValidation, setRegisterValidation] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        other: '',
    })

    const [
        registerUser,
        {
            error: registerResponseError,
            isSuccess: isRegisterSuccess,
            isLoading: isRegisterLoading,
            isError: isRegisterError,
        },
    ] = useRegisterUserMutation()
    const [
        getToken,
        {
            error: loginResponseError,
            isSuccess: isLoginSuccess,
            isLoading: isLoginLoading,
            isError: isLoginError,
        },
    ] = useGetTokenMutation()

    const { user } = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

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
            const response = await getToken(inputValue).unwrap()

            dispatch(login(jwtDecode(response.access)))
            dispatch(setToken(response.access))
            localStorage.setItem('authToken', response.access)
            navigate('/')
        } catch (error) {
            // TODO manage errors
        }
    }

    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('authToken')
        navigate('/login')
    }

    const checkRegisterValidation = () => {
        !registerInputValue.firstName
            ? setRegisterValidation((prev) => ({
                  ...prev,
                  firstName: 'Please enter first name',
              }))
            : setRegisterValidation((prev) => ({ ...prev, firstName: '' }))

        !registerInputValue.lastName
            ? setRegisterValidation((prev) => ({
                  ...prev,
                  lastName: 'Please enter last name',
              }))
            : setRegisterValidation((prev) => ({ ...prev, lastName: '' }))

        !registerInputValue.email || !registerInputValue.email.match(emailRegex)
            ? setRegisterValidation((prev) => ({
                  ...prev,
                  email: 'Please enter email',
              }))
            : setRegisterValidation((prev) => ({ ...prev, email: '' }))

        !registerInputValue.password
            ? setRegisterValidation((prev) => ({
                  ...prev,
                  password: 'Please enter password',
              }))
            : setRegisterValidation((prev) => ({ ...prev, password: '' }))

        !registerInputValue.confirmPassword
            ? setRegisterValidation((prev) => ({
                  ...prev,
                  confirmPassword: 'Please confirm password',
              }))
            : setRegisterValidation((prev) => ({
                  ...prev,
                  confirmPassword: '',
              }))
    }

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        checkRegisterValidation()

        if (
            isRegisterLoading ||
            isRegisterSuccess ||
            !registerInputValue.password.match(passwordRegex) ||
            registerInputValue.password !== registerInputValue.confirmPassword
        )
            return

        registerUser(registerInputValue)
    }

    const loginNavigation = () => {
        user.user_id ? handleLogout() : navigate('/login')
    }

    const checkAuth = useCallback(() => {
        const token = localStorage.getItem('authToken')

        if (token) {
            dispatch(login(jwtDecode(token)))
            dispatch(setToken(token))
        } else {
            navigate('/login')
        }
    }, [dispatch, navigate])

    useEffect(() => {
        registerResponseError
            ? setRegisterValidation((prev) => ({
                  ...prev,
                  other: 'Something went wrong. Please try again later',
              }))
            : setRegisterValidation((prev) => ({ ...prev, other: '' }))
    }, [registerResponseError])

    return {
        inputValue,
        registerInputValue,
        isRegisterSuccess,
        isRegisterLoading,
        isRegisterError,
        isLoginError,
        isLoginLoading,
        isLoginSuccess,
        loginResponseError,
        passwordValidation,
        registerResponseError,
        registerValidation,
        handleRegisterInput,
        handleRegister,
        handleAuthInput,
        handleLogin,
        loginNavigation,
        checkAuth,
        setRegisterValidation,
    }
}
