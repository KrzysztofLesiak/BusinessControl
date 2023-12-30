import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from '..'

test('Render Navigation component', () => {
    render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    )
    expect(true).toBeTruthy()
})
