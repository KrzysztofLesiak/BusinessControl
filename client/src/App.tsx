import { Route, Routes, useLocation } from 'react-router-dom'

import { Home } from './pages/Home'
import { Employees } from './pages/Employees'
import { NewEmployee } from './pages/Employees/NewEmployee'
import { Login } from './pages/Login'
import { Navigation } from './components/Navigation'

import './App.scss'

function App() {
    const location = useLocation()

    return (
        <>
            {location.pathname !== '/login' && <Navigation />}
            <div
                className={`ml-0 h-screen  overflow-auto transition-all ${
                    location.pathname === '/login' ? '' : 'sm:ml-16 lg:ml-64'
                } `}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/employees/new" element={<NewEmployee />} />
                    <Route path="/employees/:id" element={<Employees />} />
                </Routes>
            </div>
        </>
    )
}

export default App
