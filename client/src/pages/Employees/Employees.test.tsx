import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { Employees } from '.'

describe('Employees', () => {
    it('renders correctly', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Employees />
                </BrowserRouter>
            </Provider>
        )
    })
})
