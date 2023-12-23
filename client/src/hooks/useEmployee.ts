import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  EmployeeType,
  useDeleteEmployeeMutation,
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
  handleEmployeeDelete: () => void;
};

export const useEmployee = (): useEmployeeData => {
  const { id } = useParams();
  const [isEditable, setIsEditable] = useState(false);
  const { inputValue, handleInput, setInputValue } = useEmployees();
  const {
    data: employee,
    isLoading: isEmployeeLoading,
    isSuccess: isEmployeeSuccess,
    isError: isEmployeeError,
    refetch: refetchGetEmployee,
  } = useGetEmployeeQuery(Number(id));
  const [editEmployee, { isSuccess: isEditSuccess }] =
    useEditEmployeeMutation();
  const [deleteEmployee, { isSuccess: isDeleteSuccess }] =
    useDeleteEmployeeMutation();

  const navigate = useNavigate();

  const handleIsEditable = () => {
    setIsEditable((prev) => !prev);
  };

  const handleEmployeeEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editEmployee(inputValue);
  };

  const handleEmployeeDelete = () => {
    deleteEmployee(Number(id));
  };

  useEffect(() => {
    if (employee) setInputValue(employee);
  }, [employee, setInputValue]);

  useEffect(() => {
    if (isEditSuccess) {
      setIsEditable(false);
    }
  }, [isEditSuccess, refetchGetEmployee]);

  useEffect(() => {
    if (isDeleteSuccess) {
      navigate("/employees");
    }
  }, [isDeleteSuccess, navigate]);

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
    handleEmployeeDelete,
  };
};
