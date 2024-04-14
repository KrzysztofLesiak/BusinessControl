import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Employees } from './pages/Employees'
import { NewEmployee } from './pages/Employees/NewEmployee'
import { Login } from './pages/Login'
import './App.scss'
import { AppRoute } from './components/AppRoute'
import { Register } from './pages/Register'
import { Finance } from './pages/Finance'

function App() {
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <AppRoute>
                        <Home />
                    </AppRoute>
                }
            />
            <Route
                path="/employees"
                element={
                    <AppRoute>
                        <Employees />
                    </AppRoute>
                }
            />
            <Route
                path="/employees/new"
                element={
                    <AppRoute>
                        <NewEmployee />
                    </AppRoute>
                }
            />
            <Route
                path="/employees/:id"
                element={
                    <AppRoute>
                        <Employees />
                    </AppRoute>
                }
            />
            <Route
                path="/finance"
                element={
                    <AppRoute>
                        <Finance />
                    </AppRoute>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default App
