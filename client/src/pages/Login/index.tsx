import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg?react'
import Laptop from '../../assets/_c0553f35-bf46-47e6-b2b9-88890900c6f8.jpg'

export const Login = () => {
    return (
        <div className="flex min-h-screen w-full justify-end">
            <div
                className="min-h-screen w-3/5 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Laptop})` }}
            ></div>
            <div
                className="relative min-h-screen w-2/5  
             bg-white lg:pr-6"
            >
                <div className="absolute -left-6 bottom-0 top-0 hidden w-6 bg-white sm:rounded-l-3xl lg:block "></div>
                <Logo className="mx-auto w-24 py-24 pr-6 text-secondary-light lg:w-20" />
                <form className="m-auto flex w-4/5 flex-col rounded-2xl  px-2 py-16">
                    <h1 className="text-xl">Sign in to Business Control</h1>
                    <p>
                        New user?{' '}
                        <Link
                            to="/register"
                            className="text-blue3-light underline"
                        >
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
                            // value={}
                            // onChange={}
                        />
                    </label>
                    <label htmlFor="firstName" className="relative my-8">
                        <p className="absolute -top-3 left-3 rounded-md bg-white px-2 text-secondary-light">
                            Password
                        </p>
                        <input
                            className="w-full rounded-lg border border-grey-light p-3 shadow-md outline-secondary-light"
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="password"
                            // value={}
                            // onChange={}
                        />
                    </label>
                    <button className="rounded-lg bg-secondary-light p-3 text-white">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
