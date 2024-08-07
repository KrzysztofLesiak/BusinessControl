import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { EmployeeTable } from '.'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../redux/store'
import { api, apiURL } from '../../../redux/services/api'

const data = {
    employees: [
        {
            id: 1,
            firstName: 'Michał',
            lastName: 'Kowalczyk',
            birthDate: '2023-12-22',
            street: 'Maciejowska 45',
            city: 'Kraków',
            postalCode: '30-001',
            phoneNumber: '444-444-444',
            status: 'HI',
            salary: '3445.00',
        },
        {
            id: 2,
            firstName: 'Janusz',
            lastName: 'Tracz',
            birthDate: '2023-12-22',
            street: 'Kościuszki 34',
            city: 'Kraków',
            postalCode: '12-322',
            phoneNumber: '123-123-123',
            status: 'HO',
            salary: '4555.00',
        },
        {
            id: 3,
            firstName: 'Janusz',
            lastName: 'Tracz',
            birthDate: '2023-12-22',
            street: 'Kościuszki 34',
            city: 'Kraków',
            postalCode: '12-322',
            phoneNumber: '123-123-123',
            status: 'FI',
            salary: '4555.00',
        },
    ],
}

const server = setupServer(
    http.get(`${apiURL}employees/`, () => {
        return HttpResponse.json(data)
    })
)

beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterEach(() => {
    server.resetHandlers()
    store.dispatch(api.util.resetApiState())
})
afterAll(() => server.close())

describe('Employees Table', () => {
    it('renders correctly', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <EmployeeTable />
                </BrowserRouter>
            </Provider>
        )
        const employeeRow = await waitFor(() =>
            screen.getByTestId('employee-1')
        )
        expect(employeeRow).toBeInTheDocument()
        fireEvent.click(employeeRow)
    })

    it('promise rejected', async () => {
        server.use(
            http.get(`${apiURL}employees/`, () => {
                return HttpResponse.error()
            })
        )

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <EmployeeTable />
                </BrowserRouter>
            </Provider>
        )

        const p = await waitFor(() =>
            screen.findByText('Something went wrong while fetching data')
        )
        expect(p).toBeInTheDocument()
    })
})
