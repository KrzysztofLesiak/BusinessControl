import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { EmployeeForm } from '.'
import { Provider } from 'react-redux'
import store from '../../redux/store'

const inputValue: { [key: string]: string | number } = {
    firstName: 'firstTest',
    lastName: 'lastTest',
    birthDate: '1999-11-11',
    street: 'streetTest',
    city: 'cityTest',
    postalCode: '11-111',
    phoneNumber: '111-111-111',
    position: 'positionTest',
    status: 'HI',
    salary: '1111',
}

describe('EmployeeForm', () => {
    it('inputs changes correctly', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <EmployeeForm />
                </BrowserRouter>
            </Provider>
        )

        Object.keys(inputValue).map((key) => {
            let element: HTMLInputElement | HTMLSelectElement
            if (key !== 'status') {
                element = screen.getByTestId(key) as HTMLInputElement
                fireEvent.change(element, {
                    target: { value: inputValue[key] },
                })
            } else {
                element = screen.getByTestId(key) as HTMLSelectElement
                fireEvent.select(element, {
                    target: { value: inputValue[key] },
                })
            }
            expect(element.value).toBe(inputValue[key])
        })
    })
    it('submit form with missing fields', () => {
        global.fetch = jest.fn(() => Promise.resolve({})) as jest.Mock

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <EmployeeForm />
                </BrowserRouter>
            </Provider>
        )

        const submitBtn = screen.getByTestId('formSubmit')
        Object.keys(inputValue).map((key) => {
            if (key === 'status') return

            const element = screen.getByTestId(key) as HTMLInputElement
            fireEvent.click(submitBtn)

            expect(element).toHaveClass('border-error')
            expect(fetch).not.toHaveBeenCalled()
        })
    })
})
