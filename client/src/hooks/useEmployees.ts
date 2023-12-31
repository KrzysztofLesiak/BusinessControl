import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
    EmployeeType,
    useAddEmployeeMutation,
    useDeleteEmployeeMutation,
    useEditEmployeeMutation,
    useGetEmployeeQuery,
    useGetEmployeesQuery,
} from '../redux/services/employees'

type useEmployeesData = {
    inputValue: EmployeeType
    employees: EmployeeType[]
    isEmployeesLoading: boolean
    isEmployeesSuccess: boolean
    isEmployeesError: boolean
    isEditable: boolean
    isEditSuccess: boolean
    isEmployeeLoading: boolean
    isEmployeeSuccess: boolean
    isEmployeeError: boolean
    isOnAddPage: boolean
    setInputValue: React.Dispatch<React.SetStateAction<EmployeeType>>
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleIsEditable: () => void
    handleEmployeeForm: (e: FormEvent<HTMLFormElement>) => void
    handleEmployeeDelete: () => void
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const useEmployees = (): useEmployeesData => {
    const { id } = useParams()
    const isOnAddPage = isNaN(Number(id))

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
    const [isEditable, setIsEditable] = useState(false)

    const [addEmployee, { isSuccess: isAddSuccess }] = useAddEmployeeMutation()

    const {
        data: employees = [],
        isLoading: isEmployeesLoading,
        isSuccess: isEmployeesSuccess,
        isError: isEmployeesError,
    } = useGetEmployeesQuery()

    const {
        data: employee,
        isLoading: isEmployeeLoading,
        isSuccess: isEmployeeSuccess,
        isError: isEmployeeError,
        refetch: refetchGetEmployee,
    } = useGetEmployeeQuery(Number(id), { skip: isOnAddPage })

    const [editEmployee, { isSuccess: isEditSuccess }] =
        useEditEmployeeMutation()

    const [deleteEmployee, { isSuccess: isDeleteSuccess }] =
        useDeleteEmployeeMutation()

    const handleIsEditable = () => {
        if (isEditable) setInputValue(employee!)
        setIsEditable((prev) => !prev)
    }

    const handleEmployeeForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        isOnAddPage ? addEmployee(inputValue) : editEmployee(inputValue)
    }

    const handleEmployeeDelete = () => {
        deleteEmployee(Number(id))
    }

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

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setInputValue((prev) => ({ ...prev, status: e.target.value }))
    }

    useEffect(() => {
        if (isAddSuccess && isEmployeesSuccess) {
            navigate('/employees')
        }
    }, [isAddSuccess, isEmployeesSuccess, navigate])

    useEffect(() => {
        if (employee) setInputValue(employee)
    }, [employee, setInputValue, refetchGetEmployee])

    useEffect(() => {
        if (isEditSuccess) {
            setIsEditable(false)
        }
    }, [isEditSuccess, refetchGetEmployee])

    useEffect(() => {
        if (isDeleteSuccess) {
            navigate('/employees')
        }
    }, [isDeleteSuccess, navigate])

    return {
        inputValue,
        employees,
        isEmployeesLoading,
        isEmployeesSuccess,
        isEmployeesError,
        isEditable,
        isEditSuccess,
        isEmployeeLoading,
        isEmployeeSuccess,
        isEmployeeError,
        isOnAddPage,
        setInputValue,
        handleInput,
        handleSelect,
        handleIsEditable,
        handleEmployeeForm,
        handleEmployeeDelete,
    }
}
