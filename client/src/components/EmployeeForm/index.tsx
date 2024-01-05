import { useEmployees } from '../../hooks/useEmployees'

export const EmployeeForm = () => {
    const {
        inputValue,
        isEditable,
        isOnAddPage,
        handleInput,
        handleIsEditable,
        handleEmployeeForm,
    } = useEmployees()

    return (
        <form
            onSubmit={handleEmployeeForm}
            className="z-10 mt-4 grid w-full grid-cols-1 gap-8 bg-white sm:grid-cols-2"
        >
            <label htmlFor="firstName" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                    First Name
                </p>
                <input
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={inputValue.firstName}
                    onChange={handleInput}
                />
            </label>
            <label htmlFor="lastName" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                    Last Name
                </p>
                <input
                    type="text"
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    id="lastName"
                    name="lastName"
                    value={inputValue.lastName}
                    onChange={handleInput}
                />
            </label>
            <label htmlFor="birthDate" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                    Birth Date
                </p>
                <input
                    type="date"
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    id="birthDate"
                    name="birthDate"
                    value={inputValue.birthDate}
                    onChange={handleInput}
                />
            </label>
            <label htmlFor="street" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                    Street
                </p>
                <input
                    type="text"
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    id="street"
                    name="street"
                    value={inputValue.street}
                    onChange={handleInput}
                />
            </label>
            <label htmlFor="city" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                    City
                </p>
                <input
                    type="text"
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    id="city"
                    name="city"
                    value={inputValue.city}
                    onChange={handleInput}
                />
            </label>
            <label htmlFor="postalCode" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                    Postal Code
                </p>
                <input
                    type="text"
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    id="postalCode"
                    name="postalCode"
                    value={inputValue.postalCode}
                    onChange={handleInput}
                />
            </label>
            <label htmlFor="phoneNumber" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                    Phone Number
                </p>
                <input
                    type="text"
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={inputValue.phoneNumber}
                    onChange={handleInput}
                />
            </label>
            <input type="hidden" name="status" value="HI" />
            {/* <input type="hidden" name="Position" value="" /> */}
            <label htmlFor="salary" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                    Gross Salary
                </p>
                <input
                    type="number"
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    name="salary"
                    id="salary"
                    value={inputValue.salary}
                    onChange={handleInput}
                    min={0}
                />
            </label>
            {isOnAddPage && (
                <button
                    className="col-start-1 mb-8 w-full rounded-lg bg-secondary-light p-3 text-white shadow-md sm:col-end-3"
                    type="submit"
                >
                    Submit
                </button>
            )}

            {!isEditable && !isOnAddPage && (
                <button type="button" onClick={handleIsEditable}>
                    Edit
                </button>
            )}
            {isEditable && !isOnAddPage && (
                <>
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleIsEditable}>
                        Cancel
                    </button>
                </>
            )}
        </form>
    )
}
