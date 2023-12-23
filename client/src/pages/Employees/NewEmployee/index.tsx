import { useEmployees } from "../../../hooks/useEmployees";

export const NewEmployee = () => {
  const { inputValue, handleInput, handleNewEmployee } = useEmployees();

  return (
    <section>
      <form onSubmit={handleNewEmployee}>
        <input
          type="text"
          name="firstName"
          value={inputValue.firstName}
          onChange={handleInput}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={inputValue.lastName}
          onChange={handleInput}
          placeholder="Last Name"
        />
        <input
          type="date"
          name="birthDate"
          value={inputValue.birthDate}
          onChange={handleInput}
        />
        <input
          type="text"
          name="street"
          value={inputValue.street}
          onChange={handleInput}
          placeholder="Street"
        />
        <input
          type="text"
          name="city"
          value={inputValue.city}
          onChange={handleInput}
          placeholder="City"
        />
        <input
          type="text"
          name="postalCode"
          value={inputValue.postalCode}
          onChange={handleInput}
          placeholder="Postal Code"
        />
        <input
          type="text"
          name="phoneNumber"
          value={inputValue.phoneNumber}
          onChange={handleInput}
          placeholder="Phone Number"
        />
        <input type="hidden" name="status" value="HI" />
        <input
          type="text"
          name="salary"
          value={inputValue.salary}
          onChange={handleInput}
          placeholder="salary"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
