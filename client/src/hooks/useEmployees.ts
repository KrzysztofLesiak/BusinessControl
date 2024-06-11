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
import { useSearch } from './useSearch'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {
    updateEmployees,
    updateLength,
    updateMaxPage,
} from '../redux/slice/employeesSlice'
import { RootState } from '../redux/store'

type useEmployeesData = {
    inputValue: EmployeeType
    isEmployeesLoading: boolean
    isEmployeesSuccess: boolean
    isEmployeesError: boolean
    isEditable: boolean
    isEditSuccess: boolean
    isEmployeeLoading: boolean
    isEmployeeSuccess: boolean
    isEmployeeError: boolean
    isOnAddPage: boolean
    searchInput: string
    isEmployeesFetching: boolean
    employeesSortBy: string
    isMissingFields: boolean
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
    setInputValue: React.Dispatch<React.SetStateAction<EmployeeType>>
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void
    handleIsEditable: () => void
    handleEmployeeForm: (e: FormEvent<HTMLFormElement>) => void
    handleEmployeeDelete: () => void
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
    handleSortBy: (SortByName: string) => void
}

export const useEmployees = (): useEmployeesData => {
    const { id } = useParams()
    const isOnAddPage = isNaN(Number(id))
    const { page, searchValue } = useAppSelector(
        (state: RootState) => state.employees
    )
    const { token } = useAppSelector((state) => state.users)

    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState<EmployeeType>({
        firstName: '',
        lastName: '',
        birthDate: '',
        street: '',
        city: '',
        postalCode: '',
        phoneNumber: '',
        position: '',
        status: 'HI',
        salary: '',
    } as EmployeeType)
    const [isEditable, setIsEditable] = useState(false)
    const [employeesSortBy, setEmployeesSortBy] = useState('id')
    const [isMissingFields, setIsMissingFields] = useState(false)

    const { searchInput, handleSearch } = useSearch()

    const [addEmployee, { isSuccess: isAddSuccess }] = useAddEmployeeMutation()

    const {
        data: getEmployeesData,
        isLoading: isEmployeesLoading,
        isSuccess: isEmployeesSuccess,
        isError: isEmployeesError,
        isFetching: isEmployeesFetching,
    } = useGetEmployeesQuery({ searchValue, employeesSortBy, page, token })

    const {
        data: employee,
        isLoading: isEmployeeLoading,
        isSuccess: isEmployeeSuccess,
        isError: isEmployeeError,
        refetch: refetchGetEmployee,
    } = useGetEmployeeQuery({ id: Number(id), token }, { skip: isOnAddPage })

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

        if (Object.values(inputValue).includes('') || inputValue.salary === 0) {
            setIsMissingFields(true)
            return
        } else {
            setIsMissingFields(false)
        }

        isOnAddPage
            ? addEmployee({ body: inputValue, token })
            : editEmployee({ body: inputValue, token })
    }

    const handleEmployeeDelete = () => {
        deleteEmployee({ id: Number(id), token })
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

    const handleSortBy = (sortByName: string) => {
        setEmployeesSortBy((prev) => {
            return prev.match(sortByName)
                ? prev.match(`-${sortByName}`)
                    ? 'id'
                    : `-${sortByName}`
                : sortByName
        })
    }
    useEffect(() => {
        if (isAddSuccess && !isEmployeesFetching) {
            navigate('/employees')
        }
    }, [isAddSuccess, isEmployeesFetching, navigate])

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

    useEffect(() => {
        if (getEmployeesData) {
            dispatch(updateEmployees(getEmployeesData.employees))
            dispatch(updateLength(getEmployeesData.length))
            dispatch(updateMaxPage(getEmployeesData.maxPage))
        }
    }, [dispatch, getEmployeesData])

    return {
        inputValue,
        isEmployeesLoading,
        isEmployeesSuccess,
        isEmployeesError,
        isEditable,
        isEditSuccess,
        isEmployeeLoading,
        isEmployeeSuccess,
        isEmployeeError,
        isOnAddPage,
        searchInput,
        isEmployeesFetching,
        employeesSortBy,
        isMissingFields,
        handleSearch,
        setInputValue,
        handleInput,
        handleSelect,
        handleIsEditable,
        handleEmployeeForm,
        handleEmployeeDelete,
        handleSortBy,
    }
}
