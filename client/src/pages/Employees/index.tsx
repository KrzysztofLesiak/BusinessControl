import { useNavigate } from "react-router-dom";
import { useGetEmployeesQuery } from "../../redux/services/employees";

export const Employees = () => {
  const {
    data: employees = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetEmployeesQuery();

  const navigate = useNavigate();

  return (
    <section>
      {isLoading && <p>Loading...</p>}
      {isSuccess &&
        employees.map((employee) => (
          <p
            key={employee.id}
            onClick={() => navigate(`/employees/${employee.id}`)}
          >
            {employee.firstName} {employee.lastName}
          </p>
        ))}
      {isError && <p>Something went wrong while fetching data</p>}
    </section>
  );
};
