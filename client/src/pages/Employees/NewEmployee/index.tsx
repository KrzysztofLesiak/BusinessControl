import { EmployeeForm } from '../../../components/EmployeeForm'

export const NewEmployee = () => {
    return (
        <section className="m-auto flex h-full w-full overflow-auto px-2 py-8">
            <div
                className="m-auto flex h-fit  min-w-72 flex-col items-center justify-center
             rounded-3xl bg-white px-8 shadow-xl"
            >
                <h1
                    className="z-10 m-4 mt-12 text-center text-2xl
                font-bold"
                >
                    Add new employee
                </h1>
                <EmployeeForm />
            </div>
        </section>
    )
}
