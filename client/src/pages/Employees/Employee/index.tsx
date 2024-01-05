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
        <section className="m-auto flex h-full w-full overflow-auto px-2 py-8">
            {isEmployeeLoading && <p>Loading...</p>}
            {isEmployeeSuccess && (
                <div
                    className="m-auto flex h-fit  min-w-72 flex-col items-center justify-center
                         rounded-3xl bg-white p-8 shadow-xl"
                >
                    <EmployeeForm />
                    <button type="button" onClick={handleEmployeeDelete}>
                        Delete
                    </button>
                </div>
            )}
            {isEmployeeError && <p>Something went wrong while fetching data</p>}
            {isEditSuccess && <p>Success</p>}
        </section>
    )
}
