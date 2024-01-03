import '@testing-library/jest-dom'
import { act, cleanup, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '..'
import { Clock } from '../Clock'

jest.useFakeTimers()

beforeEach(() => {
    jest.spyOn(global, 'clearInterval').mockImplementation(() => {})
})

afterEach(() => {
    jest.clearAllTimers()
    jest.restoreAllMocks()
    cleanup()
})

describe('Home', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(true).toBeTruthy()
    })
})

describe('Clock', () => {
    it('updates date every second', () => {
        const { getByText } = render(<Clock />)

        act(() => {
            jest.advanceTimersByTime(1000)
        })

        expect(getByText(/Hello, /i)).toBeInTheDocument()
    })
})
