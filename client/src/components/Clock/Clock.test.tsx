import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Clock } from '.'
import { loginUser } from '../../redux/slice/usersSlice'
import { api } from '../../redux/services/api'

const firstName = 'test'
const user = {
    token_type: '',
    exp: 0,
    iat: 0,
    jti: '',
    user_id: 0,
    first_name: firstName,
}
const date = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Europe/Berlin',
}).format(new Date())

afterEach(() => store.dispatch(api.util.resetApiState()))

describe('Clock', () => {
    it('renders correctly', () => {
        store.dispatch(loginUser(user))

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Clock />
                </BrowserRouter>
            </Provider>
        )

        const header = screen.getByTestId('hello-user')
        const timer = screen.getByTestId('timer')
        expect(header).toHaveTextContent(`Hello, ${firstName}!`)
        expect(timer).toHaveTextContent(date)
    })
})
