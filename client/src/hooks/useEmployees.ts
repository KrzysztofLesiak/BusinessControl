import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    EmployeeType,
    useAddEmployeeMutation,
    useGetEmployeesQuery,
} from '../redux/services/employees'

type useEmployeesData = {
    inputValue: EmployeeType
    employees: EmployeeType[]
    isEmployeesLoading: boolean
    isEmployeesSuccess: boolean
    isEmployeesError: boolean
    setInputValue: React.Dispatch<React.SetStateAction<EmployeeType>>
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleNewEmployee: (e: FormEvent<HTMLFormElement>) => void
}

export const useEmployees = (): useEmployeesData => {
    const [inputValue, setInputValue] = useState<EmployeeType>({
        firstName: '',
        lastName: '',
        birthDate: '',
        street: '',
        city: '',
        postalCode: '',
        phoneNumber: '',
        status: 'HI',
        salary: 0,
    } as EmployeeType)
    const [addEmployee, { isSuccess: isAddSuccess }] = useAddEmployeeMutation()
    const {
        data: employees = [],
        isLoading: isEmployeesLoading,
        isSuccess: isEmployeesSuccess,
        isError: isEmployeesError,
    } = useGetEmployeesQuery()

    const navigate = useNavigate()

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        if (name === 'postalCode') {
            const lastKeyInput = value.replace(inputValue.postalCode, '')
            let input = value

            if (lastKeyInput.match(/\d/) || value.match(/\d{2}-$/) || !value) {
                if (value.length > 6) return

                if (value.length > 2 && !value.includes('-'))
                    input = `${value.slice(0, 2)}-${value.slice(2)}`

                setInputValue((prev) => ({ ...prev, [name]: input }))
                return
            } else {
                return
            }
        }

        if (name === 'phoneNumber') {
            const lastKeyInput = value.replace(inputValue.phoneNumber, '')
            let input = value

            if (
                lastKeyInput.match(/\d/) ||
                value.match(/\d{3}-$|\d{3}-\d{3}-/) ||
                !value
            ) {
                if (value.length > 11) return

                if (value.length > 3 && !value.match(/\d{3}-/))
                    input = `${value.slice(0, 3)}-${value.slice(3)}`

                if (value.length > 7 && !value.match(/\d{3}-\d{3}-/))
                    input = `${value.slice(0, 7)}-${value.slice(7)}`

                setInputValue((prev) => ({ ...prev, [name]: input }))
                return
            } else {
                return
            }
        }

        setInputValue((prev) => ({ ...prev, [name]: value }))
    }

    const handleNewEmployee = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addEmployee(inputValue)
    }

    useEffect(() => {
        if (isAddSuccess) {
            navigate('/employees')
        }
    }, [isAddSuccess, navigate])

    return {
        inputValue,
        employees,
        isEmployeesLoading,
        isEmployeesSuccess,
        isEmployeesError,
        setInputValue,
        handleInput,
        handleNewEmployee,
    }
}
