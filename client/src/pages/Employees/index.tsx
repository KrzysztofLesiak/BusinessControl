import {
  errMsgType,
  useGetEmployeesQuery,
} from "../../redux/services/employees";

export const Employees = () => {
  const {
    data: employees = [],
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetEmployeesQuery();

  let content;

  if (isLoading) {
    content = "loading";
  } else if (isSuccess) {
    content = employees.map((employee) => (
      <p key={employee.id}>
        {employee.firstName} {employee.lastName}
      </p>
    ));
  } else if (isError) {
    if ("status" in error) {
      const errMsg = error.data as unknown as errMsgType;
      content = <div>{errMsg.detail}</div>;
    }
  }

  return <section>{content}</section>;
};
