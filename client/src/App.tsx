import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Employees } from './pages/Employees'
// import { Employee } from './pages/Employees/Employee'
import { NewEmployee } from './pages/Employees/NewEmployee'

import './App.scss'
import { Navigation } from './components/Navigation'

function App() {
    return (
        <div className="bg-secondary-light bg-gradient-to-b from-secondary-light to-blue3-light shadow-lg">
            <Navigation />
            <div className="ml-0 h-screen overflow-auto bg-primary-light transition-all sm:ml-16 sm:rounded-l-3xl lg:ml-64">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/employees/new" element={<NewEmployee />} />
                    <Route path="/employees/:id" element={<Employees />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
