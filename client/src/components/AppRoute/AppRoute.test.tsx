import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { AppRoute } from '.'
import { loginUser, logoutUser, setToken } from '../../redux/slice/usersSlice'
import { jwtDecode } from 'jwt-decode'

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NTA3OTY0LCJpYXQiOjE3MTY5MTU5NjQsImp0aSI6IjcxYzNkMjgwNmYwMzRlMGI4YWZlNjdlZjlhNmYzYzVmIiwidXNlcl9pZCI6MSwiZmlyc3RfbmFtZSI6IktyenlzenRvZiJ9.f2HGGN-EJGOmAgNAxX8FYFmBv1tIuYc_1IDwNm-k_mU'

afterEach(() => {
    store.dispatch(logoutUser())
    localStorage.clear()
})

describe('AppRoute', () => {
    it('authenticated', () => {
        store.dispatch(loginUser(jwtDecode(token)))
        store.dispatch(setToken(token))

        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <AppRoute>
                        <div data-testid="mock-test">Test</div>
                    </AppRoute>
                </BrowserRouter>
            </Provider>
        )
        const testDiv = screen.getByTestId('mock-test')
        expect(container).toBeInTheDocument()
        expect(container).toContainElement(testDiv)
    })
    it('not authenticated', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <AppRoute>
                        <div></div>
                    </AppRoute>
                </BrowserRouter>
            </Provider>
        )
        expect(container).toBeEmptyDOMElement()
    })
})
