import { EmployeeForm } from '../../../components/EmployeeForm'
import { useEmployees } from '../../../hooks/useEmployees'

export const Employee = () => {
    const {
        isEmployeeLoading,
        isEmployeeSuccess,
        isEmployeeError,
        isEditSuccess,
        handleEmployeeDelete,
    } = useEmployees()

    return (
        <section className="m-auto flex h-full w-full overflow-auto px-2">
            {isEmployeeLoading && <p>Loading...</p>}
            {isEmployeeSuccess && (
                <div
                    className="m-auto flex h-fit  min-w-72 flex-col items-center justify-center
                         rounded-3xl bg-white p-8 shadow-xl"
                >
                    <EmployeeForm />
                    <button
                        type="button"
                        onClick={handleEmployeeDelete}
                        className="w-full rounded-lg border-4 border-error p-3 text-error shadow-md hover:bg-error hover:text-white"
                    >
                        Delete
                    </button>
                </div>
            )}
            {isEmployeeError && <p>Something went wrong while fetching data</p>}
            {isEditSuccess && <p>Success</p>}
        </section>
    )
}
