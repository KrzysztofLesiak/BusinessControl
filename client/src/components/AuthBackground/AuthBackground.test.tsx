import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AuthBackground } from '.'

describe('AuthBackground', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <AuthBackground>
                    <div data-testid="test-div"></div>
                </AuthBackground>
            </BrowserRouter>
        )
        const testDiv = screen.getByTestId('test-div')
        expect(container).toContainElement(testDiv)
    })
})
