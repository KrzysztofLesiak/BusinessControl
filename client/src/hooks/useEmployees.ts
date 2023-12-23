import { ChangeEvent, FormEvent, useState } from "react";
import {
  EmployeeType,
  useAddEmployeeMutation,
} from "../redux/services/employees";

type useEmployeesData = {
  inputValue: EmployeeType;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNewEmployee: (e: FormEvent<HTMLFormElement>) => void;
};

export const useEmployees = (): useEmployeesData => {
  const [inputValue, setInputValue] = useState<EmployeeType>({
    firstName: "",
    lastName: "",
    birthDate: "",
    street: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    status: "HI",
    salary: 0,
  } as EmployeeType);

  const [addEmployee] = useAddEmployeeMutation();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "postalCode") {
      const lastKeyInput = value.replace(inputValue.postalCode, "");
      let input = value;

      if (lastKeyInput.match(/\d/) || value.match(/\d{2}-$/) || !value) {
        if (value.length > 6) return;

        if (value.length > 2 && !value.includes("-"))
          input = `${value.slice(0, 2)}-${value.slice(2)}`;

        setInputValue((prev) => ({ ...prev, [name]: input }));
        return;
      } else {
        return;
      }
    }

    if (name === "phoneNumber") {
      const lastKeyInput = value.replace(inputValue.phoneNumber, "");
      let input = value;

      if (
        lastKeyInput.match(/\d/) ||
        value.match(/\d{3}-$|\d{3}-\d{3}-$/) ||
        !value
      ) {
        if (value.length > 11) return;

        if (value.length > 3 && !value.match(/\d{3}-/))
          input = `${value.slice(0, 3)}-${value.slice(3)}`;

        if (value.length > 7 && !value.match(/\d{3}-\d{3}-/))
          input = `${value.slice(0, 7)}-${value.slice(7)}`;

        setInputValue((prev) => ({ ...prev, [name]: input }));
        return;
      } else {
        return;
      }
    }

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewEmployee = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(inputValue);

    addEmployee(inputValue);
  };

  return {
    inputValue,
    handleInput,
    handleNewEmployee,
  };
};
