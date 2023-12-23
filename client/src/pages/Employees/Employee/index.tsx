import { useParams } from "react-router-dom";
import {
  errMsgType,
  useGetEmployeeQuery,
} from "../../../redux/services/employees";

export const Employee = () => {
  const { id } = useParams();

  const {
    data: employee,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetEmployeeQuery(Number(id));

  let content;

  if (isLoading) {
    content = "loading";
  } else if (isSuccess) {
    content = (
      <p key={employee.id}>
        {employee.firstName} {employee.lastName}
      </p>
    );
  } else if (isError) {
    if ("status" in error) {
      const errMsg = error.data as unknown as errMsgType;
      content = <div>{errMsg.detail}</div>;
    }
  }

  return <section>{content}</section>;
};
