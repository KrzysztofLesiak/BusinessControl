import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from '..'

describe('Navigation', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        )
        expect(true).toBeTruthy()
    })
    it('render navlinks', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        )
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Employees')).toBeInTheDocument()
    })
    it('check changeVisibility function', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        )
        const arrow = screen.getByTestId('arrow')
        expect(arrow).toHaveClass('rotate-0')
        fireEvent.click(arrow)
        expect(arrow).toHaveClass('rotate-180')
    })
})
