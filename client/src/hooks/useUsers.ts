import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setTokens } from '../redux/slice/usersSlice'
import { useNavigate } from 'react-router-dom'

type UseUsersData = {
    inputValue: {
        email: string
        password: string
    }
    handleLoginInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleLogin: (e: FormEvent<HTMLFormElement>) => void
}

export const useUsers = (): UseUsersData => {
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    })

    const authTokens = useAppSelector((state) => state.users.authTokens)
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
            dispatch(setTokens(data))
            console.log(authTokens)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return {
        inputValue,
        handleLoginInput,
        handleLogin,
    }
}
