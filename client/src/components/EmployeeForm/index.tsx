import { useEmployees } from '../../hooks/useEmployees'
import { EmployeeFormInput } from '../EmployeeFormInput'

export const EmployeeForm = () => {
    const {
        inputValue,
        isEditable,
        isOnAddPage,
        isMissingFields,
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
            <EmployeeFormInput
                name="firstName"
                label="First Name"
                value={inputValue.firstName}
                isMissingFields={isMissingFields}
                isEditable={isEditable}
                isOnAddPage={isOnAddPage}
                handleInput={handleInput}
            />
            <EmployeeFormInput
                name="lastName"
                label="Last Name"
                value={inputValue.lastName}
                isMissingFields={isMissingFields}
                isEditable={isEditable}
                isOnAddPage={isOnAddPage}
                handleInput={handleInput}
            />
            <EmployeeFormInput
                name="birthDate"
                label="Birth Date"
                value={inputValue.birthDate}
                isMissingFields={isMissingFields}
                isEditable={isEditable}
                isOnAddPage={isOnAddPage}
                handleInput={handleInput}
            />
            <EmployeeFormInput
                name="street"
                label="Street"
                value={inputValue.street}
                isMissingFields={isMissingFields}
                isEditable={isEditable}
                isOnAddPage={isOnAddPage}
                handleInput={handleInput}
            />
            <EmployeeFormInput
                name="city"
                label="City"
                value={inputValue.city}
                isMissingFields={isMissingFields}
                isEditable={isEditable}
                isOnAddPage={isOnAddPage}
                handleInput={handleInput}
            />
            <EmployeeFormInput
                name="postalCode"
                label="Postal Code"
                value={inputValue.postalCode}
                isMissingFields={isMissingFields}
                isEditable={isEditable}
                isOnAddPage={isOnAddPage}
                handleInput={handleInput}
            />
            <EmployeeFormInput
                name="phoneNumber"
                label="Phone Number"
                value={inputValue.phoneNumber}
                isMissingFields={isMissingFields}
                isEditable={isEditable}
                isOnAddPage={isOnAddPage}
                handleInput={handleInput}
            />
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
            <EmployeeFormInput
                name="position"
                label="Position"
                value={inputValue.position}
                isMissingFields={isMissingFields}
                isEditable={isEditable}
                isOnAddPage={isOnAddPage}
                handleInput={handleInput}
            />
            <EmployeeFormInput
                type="number"
                name="salary"
                label="Gross Salary"
                value={inputValue.salary}
                isMissingFields={isMissingFields}
                isEditable={isEditable}
                isOnAddPage={isOnAddPage}
                handleInput={handleInput}
            />
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
