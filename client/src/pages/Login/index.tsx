import { Link } from 'react-router-dom'
import { useUsers } from '../../hooks/useUsers'
import { AuthBackground } from '../../components/AuthBackground'

export const Login = () => {
    const { inputValue, handleAuthInput, handleLogin } = useUsers()

    return (
        <AuthBackground>
            <form
                className="mx-auto flex w-4/5 max-w-[352px] flex-col rounded-2xl px-2"
                onSubmit={handleLogin}
            >
                <h1 className="text-xl">Sign in to Business Control</h1>
                <p>
                    New user?{' '}
                    <Link to="/register" className="text-blue3-light underline">
                        Create an account
                    </Link>
                </p>
                <label htmlFor="email" className="relative mt-8">
                    <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                        Email address
                    </p>
                    <input
                        className="w-full rounded-lg border border-grey-light p-3 text-sm shadow-md outline-secondary-light"
                        type="email"
                        autoComplete="email"
                        id="email"
                        name="email"
                        value={inputValue.email}
                        onChange={handleAuthInput}
                    />
                </label>
                <label htmlFor="password" className="relative my-8">
                    <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                        Password
                    </p>
                    <input
                        className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="password"
                        value={inputValue.password}
                        onChange={handleAuthInput}
                    />
                </label>
                <button className="rounded-lg bg-secondary-light p-3 text-white">
                    Login
                </button>
            </form>
        </AuthBackground>
    )
}
