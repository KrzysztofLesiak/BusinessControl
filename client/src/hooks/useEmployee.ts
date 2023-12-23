import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  EmployeeType,
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from "../redux/services/employees";
import { useEmployees } from "./useEmployees";

type useEmployeeData = {
  inputValue: EmployeeType;
  isEditable: boolean;
  isEditSuccess: boolean;
  isEmployeeLoading: boolean;
  isEmployeeSuccess: boolean;
  isEmployeeError: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<EmployeeType>>;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIsEditable: () => void;
  handleEmployeeEdit: (e: FormEvent<HTMLFormElement>) => void;
};

export const useEmployee = (): useEmployeeData => {
  const { id } = useParams();
  const [isEditable, setIsEditable] = useState(false);
  const { inputValue, handleInput, setInputValue } = useEmployees();
  const [
    editEmployee,
    {
      // isLoading: isEditLoading,
      isSuccess: isEditSuccess,
      // isError: isEditError,
    },
  ] = useEditEmployeeMutation();

  const {
    data: employee,
    isLoading: isEmployeeLoading,
    isSuccess: isEmployeeSuccess,
    isError: isEmployeeError,
    refetch: refetchGetEmployee,
  } = useGetEmployeeQuery(Number(id));

  const handleIsEditable = () => {
    setIsEditable((prev) => !prev);
  };

  const handleEmployeeEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editEmployee(inputValue);
  };

  useEffect(() => {
    if (employee) setInputValue(employee);
  }, [employee, setInputValue]);

  useEffect(() => {
    if (isEditSuccess) {
      setIsEditable(false);
      refetchGetEmployee();
    }
  }, [isEditSuccess]);

  return {
    inputValue,
    isEditable,
    isEditSuccess,
    isEmployeeLoading,
    isEmployeeSuccess,
    isEmployeeError,
    setInputValue,
    handleInput,
    handleIsEditable,
    handleEmployeeEdit,
  };
};
