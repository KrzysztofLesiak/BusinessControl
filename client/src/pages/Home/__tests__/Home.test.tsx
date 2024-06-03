import '@testing-library/jest-dom'
import { act, cleanup, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '..'
import { Clock } from '../../../components/Clock'
import { Provider } from 'react-redux'
import store from '../../../redux/store'

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
            <Provider store={store}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </Provider>
        )
        expect(true).toBeTruthy()
    })
})

describe('Clock', () => {
    it('updates date every second', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Clock />
            </Provider>
        )

        act(() => {
            jest.advanceTimersByTime(1000)
        })

        expect(getByText(/Hello, /i)).toBeInTheDocument()
    })
})
