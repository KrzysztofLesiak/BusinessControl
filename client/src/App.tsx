import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Employees } from './pages/Employees'
import { NewEmployee } from './pages/Employees/NewEmployee'
import { Login } from './pages/Login'
import './App.scss'
import { AppWrapper } from './components/AppWrapper'

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AppWrapper>
                        <Home />
                    </AppWrapper>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route
                path="/employees"
                element={
                    <AppWrapper>
                        <Employees />
                    </AppWrapper>
                }
            />
            <Route
                path="/employees/new"
                element={
                    <AppWrapper>
                        <NewEmployee />
                    </AppWrapper>
                }
            />
            <Route
                path="/employees/:id"
                element={
                    <AppWrapper>
                        <Employees />
                    </AppWrapper>
                }
            />
        </Routes>
    )
}

export default App
