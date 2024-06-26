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
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-quartiary-light">
                    First Name
                </p>
                <input
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={inputValue.firstName}
                    onChange={handleInput}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="firstName"
                />
            </label>
            <label htmlFor="lastName" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-quartiary-light">
                    Last Name
                </p>
                <input
                    type="text"
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    id="lastName"
                    name="lastName"
                    value={inputValue.lastName}
                    onChange={handleInput}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="lastName"
                />
            </label>
            <label htmlFor="birthDate" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-quartiary-light">
                    Birth Date
                </p>
                <input
                    type="date"
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    id="birthDate"
                    name="birthDate"
                    value={inputValue.birthDate}
                    onChange={handleInput}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="birthDate"
                />
            </label>
            <label htmlFor="street" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-quartiary-light">
                    Street
                </p>
                <input
                    type="text"
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    id="street"
                    name="street"
                    value={inputValue.street}
                    onChange={handleInput}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="street"
                />
            </label>
            <label htmlFor="city" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-quartiary-light">
                    City
                </p>
                <input
                    type="text"
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    id="city"
                    name="city"
                    value={inputValue.city}
                    onChange={handleInput}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="city"
                />
            </label>
            <label htmlFor="postalCode" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-quartiary-light">
                    Postal Code
                </p>
                <input
                    type="text"
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    id="postalCode"
                    name="postalCode"
                    value={inputValue.postalCode}
                    onChange={handleInput}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="postalCode"
                />
            </label>
            <label htmlFor="phoneNumber" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-quartiary-light">
                    Phone Number
                </p>
                <input
                    type="text"
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={inputValue.phoneNumber}
                    onChange={handleInput}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="phoneNumber"
                />
            </label>
            <label htmlFor="status" className="relative">
                <p className="absolute -top-3 left-3 z-10 rounded-md bg-white px-2 text-quartiary-light">
                    Status
                </p>
                <select
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    name="status"
                    id="status"
                    value={inputValue.status}
                    onChange={handleSelect}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="status"
                >
                    <option value="HI">Hired</option>
                    <option value="HO">Holiday</option>
                    <option value="FI">Fired</option>
                </select>
            </label>
            <label htmlFor="position" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-quartiary-light">
                    Position
                </p>
                <input
                    type="text"
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    name="position"
                    id="position"
                    value={inputValue.position}
                    onChange={handleInput}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="position"
                />
            </label>
            <label htmlFor="salary" className="relative">
                <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-quartiary-light">
                    Gross Salary
                </p>
                <input
                    type="number"
                    className="border-grey-light w-full rounded-lg border p-3 shadow-md outline-quartiary-light"
                    name="salary"
                    id="salary"
                    value={inputValue.salary}
                    onChange={handleInput}
                    min={0}
                    disabled={!isEditable && !isOnAddPage}
                    data-testid="salary"
                />
            </label>
            {isOnAddPage && (
                <button
                    className="col-start-1 mb-8 w-full rounded-lg bg-quartiary-light p-3 text-white shadow-md sm:col-end-3"
                    type="submit"
                    data-testid="formSubmit"
                >
                    Submit
                </button>
            )}

            {!isEditable && !isOnAddPage && (
                <button
                    className="col-start-1 mb-8 w-full rounded-lg bg-quartiary-light p-3 text-white shadow-md sm:col-end-3"
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
