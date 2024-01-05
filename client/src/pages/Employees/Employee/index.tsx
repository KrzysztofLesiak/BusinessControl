import { useEmployees } from '../../../hooks/useEmployees'

export const Employee = () => {
    const {
        inputValue,
        isEditable,
        isEmployeeLoading,
        isEmployeeSuccess,
        isEmployeeError,
        isEditSuccess,
        handleInput,
        handleIsEditable,
        handleEmployeeEdit,
        handleEmployeeDelete,
    } = useEmployees()

    return (
        <section>
            {isEmployeeLoading && <p>Loading...</p>}
            {isEmployeeSuccess && (
                <>
                    <form onSubmit={handleEmployeeEdit}>
                        <input
                            type="text"
                            name="firstName"
                            value={inputValue.firstName}
                            onChange={handleInput}
                            placeholder="First Name"
                            disabled={!isEditable}
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={inputValue.lastName}
                            onChange={handleInput}
                            placeholder="Last Name"
                            disabled={!isEditable}
                        />
                        <input
                            type="date"
                            name="birthDate"
                            value={inputValue.birthDate}
                            onChange={handleInput}
                            disabled={!isEditable}
                        />
                        <input
                            type="text"
                            name="street"
                            value={inputValue.street}
                            onChange={handleInput}
                            placeholder="Street"
                            disabled={!isEditable}
                        />
                        <input
                            type="text"
                            name="city"
                            value={inputValue.city}
                            onChange={handleInput}
                            placeholder="City"
                            disabled={!isEditable}
                        />
                        <input
                            type="text"
                            name="postalCode"
                            value={inputValue.postalCode}
                            onChange={handleInput}
                            placeholder="Postal Code"
                            disabled={!isEditable}
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            value={inputValue.phoneNumber}
                            onChange={handleInput}
                            placeholder="Phone Number"
                            disabled={!isEditable}
                        />
                        <input type="hidden" name="status" value="HI" />
                        <input
                            type="text"
                            name="salary"
                            value={inputValue.salary}
                            onChange={handleInput}
                            placeholder="salary"
                            disabled={!isEditable}
                        />
                        {!isEditable && (
                            <button type="button" onClick={handleIsEditable}>
                                Edit
                            </button>
                        )}
                        {isEditable && (
                            <>
                                <button type="submit">Save</button>
                                <button
                                    type="button"
                                    onClick={handleIsEditable}
                                >
                                    Cancel
                                </button>
                            </>
                        )}
                    </form>
                    <button type="button" onClick={handleEmployeeDelete}>
                        Delete
                    </button>
                </>
            )}
            {isEmployeeError && <p>Something went wrong while fetching data</p>}
            {isEditSuccess && <p>Success</p>}
        </section>
    )
}
