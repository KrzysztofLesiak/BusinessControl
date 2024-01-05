import { useEmployees } from '../../hooks/useEmployees'

export const EmployeeForm = () => {
    const {
        inputValue,
        isEditable,
        isOnAddPage,
        handleInput,
        handleSelect,
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
                    disabled={!isEditable && !isOnAddPage}
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
                    disabled={!isEditable && !isOnAddPage}
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
                    disabled={!isEditable && !isOnAddPage}
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
                    disabled={!isEditable && !isOnAddPage}
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
                    disabled={!isEditable && !isOnAddPage}
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
                    disabled={!isEditable && !isOnAddPage}
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
                    disabled={!isEditable && !isOnAddPage}
                />
            </label>
            <label htmlFor="status" className="relative">
                <p className="absolute -top-3 left-3 z-10 rounded-md bg-white px-2 text-secondary-light">
                    Status
                </p>
                <select
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    name="status"
                    id="status"
                    value={inputValue.status}
                    onChange={handleSelect}
                    disabled={!isEditable && !isOnAddPage}
                >
                    <option value="HI">Hired</option>
                    <option value="HO">Holiday</option>
                    <option value="FI">Fired</option>
                </select>
            </label>
            <label htmlFor="position" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                    Position
                </p>
                <input
                    type="text"
                    className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                    name="position"
                    id="position"
                    // value={inputValue}
                    // onChange={handleInput}
                    disabled={!isEditable && !isOnAddPage}
                />
            </label>
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
                    disabled={!isEditable && !isOnAddPage}
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
                <button
                    className="col-start-1 mb-8 w-full rounded-lg bg-secondary-light p-3 text-white shadow-md sm:col-end-3"
                    type="button"
                    onClick={handleIsEditable}
                >
                    Edit
                </button>
            )}
            {isEditable && !isOnAddPage && (
                <>
                    <button
                        type="submit"
                        className="mb-8 w-full rounded-lg bg-success p-3 text-white shadow-md"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className=" mb-8 w-full rounded-lg bg-error p-3 text-white shadow-md"
                        onClick={handleIsEditable}
                    >
                        Cancel
                    </button>
                </>
            )}
        </form>
    )
}
