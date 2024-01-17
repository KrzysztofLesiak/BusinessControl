import { EmployeeForm } from '../../../components/EmployeeForm'
import { useEmployees } from '../../../hooks/useEmployees'
import Chevron from '../../../assets/chevron-up-solid.svg?react'
import { useNavigate } from 'react-router-dom'
import { Loading } from '../../../components/Loading'

export const Employee = () => {
    const {
        isEmployeeLoading,
        isEmployeeSuccess,
        isEmployeeError,
        isEditSuccess,
        handleEmployeeDelete,
    } = useEmployees()

    const navigate = useNavigate()

    const handleNavigate = () => navigate('/employees')

    return (
        <>
            <div
                className="m-auto flex h-fit  min-w-72 flex-col items-center justify-center
                     rounded-3xl bg-white p-8 shadow-xl"
            >
                {isEmployeeLoading && <Loading />}
                {isEmployeeError && (
                    <p>Something went wrong while fetching data</p>
                )}

                {isEmployeeSuccess && (
                    <>
                        <div
                            className="mb-4 w-full text-left"
                            onClick={handleNavigate}
                        >
                            <Chevron className="h-auto w-6 -rotate-90 text-secondary-light" />
                        </div>
                        <EmployeeForm />
                        <button
                            type="button"
                            onClick={handleEmployeeDelete}
                            className="w-full rounded-lg border-4 border-error p-3 text-error shadow-md hover:bg-error hover:text-white"
                        >
                            Delete
                        </button>
                        {isEditSuccess && <p>Success</p>}
                    </>
                )}
            </div>
        </>
    )
}
