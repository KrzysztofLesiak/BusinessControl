import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Employees } from "./pages/Employees";
import { Employee } from "./pages/Employees/Employee";
import { NewEmployee } from "./pages/Employees/NewEmployee";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/new" element={<NewEmployee />} />
        <Route path="/employees/:id" element={<Employee />} />
      </Routes>
    </>
  );
}

export default App;
