import { Link } from 'react-router-dom'
import { AuthBackground } from '../../components/AuthBackground'
import { useUsers } from '../../hooks/useUsers'

import Mark from '../../assets/xmark-solid.svg?react'
import Check from '../../assets/check-solid.svg?react'
import Loader from '../../assets/spinner-solid.svg?react'

export const Register = () => {
    const {
        registerInputValue,
        passwordValidation,
        isRegisterError,
        isRegisterLoading,
        registerValidation,
        handleRegisterInput,
        handleRegister,
        setRegisterValidation,
    } = useUsers()

    return (
        <AuthBackground>
            <form
                className="mx-auto flex w-4/5 max-w-[450px] flex-col rounded-2xl px-2"
                onSubmit={handleRegister}
            >
                <h1 className="text-xl">Get started</h1>
                <p>
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue3-light underline">
                        Login
                    </Link>
                </p>
                {isRegisterError ||
                    (!Object.values(registerValidation).every(
                        (value) => value === ''
                    ) &&
                        Object.keys(registerValidation).map((key) => {
                            if (
                                registerValidation[
                                    key as keyof typeof registerValidation
                                ]
                            )
                                return (
                                    <div
                                        className={`mt-2 flex items-center justify-between rounded-md border border-error border-opacity-40 bg-error bg-opacity-10 p-2 transition-all`}
                                    >
                                        <p className="text-xs text-error">
                                            {
                                                registerValidation[
                                                    key as keyof typeof registerValidation
                                                ]
                                            }
                                        </p>
                                        <Mark
                                            className="h-6 w-6 rounded-full p-1 text-error hover:bg-error hover:bg-opacity-30"
                                            onClick={() =>
                                                setRegisterValidation(
                                                    (prev) => ({
                                                        ...prev,
                                                        [key]: '',
                                                    })
                                                )
                                            }
                                        />
                                    </div>
                                )
                        }))}
                <div className="mb-4 grid grid-cols-2 gap-4 transition-all">
                    <label htmlFor="firstName" className="relative mt-8">
                        <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-blue3-light">
                            First Name
                        </p>
                        <input
                            className={`outline-quartiary-light w-full rounded-lg border p-3 shadow-md ${
                                registerValidation.firstName
                                    ? 'border-error'
                                    : 'border-grey-light'
                            }`}
                            type="text"
                            autoComplete="firstName"
                            id="firstName"
                            name="firstName"
                            value={registerInputValue.firstName}
                            onChange={handleRegisterInput}
                        />
                    </label>
                    <label htmlFor="lastName" className="relative mt-8">
                        <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-blue3-light">
                            Last Name
                        </p>
                        <input
                            className={`outline-quartiary-light w-full rounded-lg border p-3 shadow-md ${
                                registerValidation.lastName
                                    ? 'border-error'
                                    : 'border-grey-light'
                            }`}
                            type="text"
                            autoComplete="lastName"
                            id="lastName"
                            name="lastName"
                            value={registerInputValue.lastName}
                            onChange={handleRegisterInput}
                        />
                    </label>
                </div>

                <label htmlFor="email" className="relative my-4">
                    <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-blue3-light">
                        Email address
                    </p>
                    <input
                        className={`outline-quartiary-light w-full rounded-lg border p-3 shadow-md ${
                            registerValidation.email
                                ? 'border-error'
                                : 'border-grey-light'
                        }`}
                        type="email"
                        autoComplete="email"
                        id="email"
                        name="email"
                        value={registerInputValue.email}
                        onChange={handleRegisterInput}
                    />
                </label>
                <label htmlFor="password" className="relative my-4">
                    <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-blue3-light">
                        Password
                    </p>
                    <input
                        className={`outline-quartiary-light w-full rounded-lg border p-3 shadow-md ${
                            registerValidation.password
                                ? 'border-error'
                                : 'border-grey-light'
                        }`}
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="password"
                        value={registerInputValue.password}
                        onChange={handleRegisterInput}
                    />
                    <div className="ml-4 mt-4">
                        <p className="text-sm">Password must:</p>
                        <ul className="text-xs">
                            <li
                                className={`flex ${
                                    passwordValidation.length
                                        ? 'text-success'
                                        : ''
                                }`}
                            >
                                {passwordValidation.length ? (
                                    <Check className="mr-2 w-2" />
                                ) : (
                                    <Mark className="mr-2 w-2" />
                                )}

                                <p>be at least 6 characters</p>
                            </li>
                            <li
                                className={`flex ${
                                    passwordValidation.digit
                                        ? 'text-success'
                                        : ''
                                }`}
                            >
                                {passwordValidation.digit ? (
                                    <Check className="mr-2 w-2" />
                                ) : (
                                    <Mark className="mr-2 w-2" />
                                )}
                                <p>contain at least one digit</p>
                            </li>
                            <li
                                className={`flex ${
                                    passwordValidation.lowercase
                                        ? 'text-success'
                                        : ''
                                }`}
                            >
                                {passwordValidation.lowercase ? (
                                    <Check className="mr-2 w-2" />
                                ) : (
                                    <Mark className="mr-2 w-2" />
                                )}
                                <p>contain at least one lowercase letter</p>
                            </li>
                            <li
                                className={`flex ${
                                    passwordValidation.uppercase
                                        ? 'text-success'
                                        : ''
                                }`}
                            >
                                {passwordValidation.uppercase ? (
                                    <Check className="mr-2 w-2" />
                                ) : (
                                    <Mark className="mr-2 w-2" />
                                )}
                                <p>contain at least one uppercase letter</p>
                            </li>
                        </ul>
                    </div>
                </label>
                <label htmlFor="confirmPassword" className="relative my-4">
                    <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-blue3-light">
                        Confirm Password
                    </p>
                    <input
                        className={`outline-quartiary-light w-full rounded-lg border p-3 shadow-md
                            ${
                                registerValidation.confirmPassword
                                    ? 'border-error'
                                    : 'border-grey-light'
                            }
                        `}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="confirmPassword"
                        value={registerInputValue.confirmPassword}
                        onChange={handleRegisterInput}
                    />
                </label>
                <button
                    type="submit"
                    className="bg-quartiary-light my-4 rounded-lg p-3 text-white shadow-md"
                >
                    {isRegisterLoading ? (
                        <Loader className="m-auto h-6 w-6 animate-spin bg-opacity-0 bg-none" />
                    ) : (
                        'Create Account'
                    )}
                </button>
            </form>
        </AuthBackground>
    )
}
