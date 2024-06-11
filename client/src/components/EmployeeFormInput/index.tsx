import { ChangeEvent } from 'react'

type EmployeeFormInputProps = {
    name: string
    label: string
    value: string | number
    isMissingFields: boolean
    isEditable: boolean
    isOnAddPage: boolean
    type?: string
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EmployeeFormInput = ({
    name,
    label,
    value,
    isMissingFields,
    isEditable,
    isOnAddPage,
    type = 'text',
    handleInput,
}: EmployeeFormInputProps) => {
    return (
        <label htmlFor={name} className="relative">
            <p
                className={`absolute -top-3 left-3 rounded-md bg-white px-2  ${
                    (isMissingFields && value === '') || value === 0
                        ? 'text-error'
                        : 'text-quartiary-light'
                }`}
            >
                {label}
            </p>
            <input
                className={`w-full  rounded-lg border p-3 shadow-md outline-quartiary-light  ${
                    (isMissingFields && value === '') || value === 0
                        ? 'border-error'
                        : 'border-grey-light'
                }`}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleInput}
                disabled={!isEditable && !isOnAddPage}
                data-testid={name}
            />
        </label>
    )
}
