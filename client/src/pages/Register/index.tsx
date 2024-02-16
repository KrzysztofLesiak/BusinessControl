import { Link } from 'react-router-dom'
import { AuthBackground } from '../../components/AuthBackground'
import { useUsers } from '../../hooks/useUsers'

import Mark from '../../assets/xmark-solid.svg?react'
import Check from '../../assets/check-solid.svg?react'

export const Register = () => {
    const {
        registerInputValue,
        passwordValidation,
        handleRegisterInput,
        handleRegister,
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
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <label htmlFor="firstName" className="relative mt-8">
                        <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-blue3-light">
                            First Name
                        </p>
                        <input
                            className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
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
                            className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
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
                        className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
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
                        className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
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
                        className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
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
                    className="my-4 rounded-lg bg-secondary-light p-3 text-white"
                >
                    Create Account
                </button>
            </form>
        </AuthBackground>
    )
}
