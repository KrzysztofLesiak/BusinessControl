import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import Logo from '../../assets/logo.svg?react'
import House from '../../assets/house-solid.svg?react'
import User from '../../assets/user-solid.svg?react'
import Arrow from '../../assets/arrow-right-solid.svg?react'
import SquarePoll from '../../assets/square-poll-vertical-solid.svg?react'

import './Navigation.scss'

export const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false)

    const changeVisibility = () => {
        setIsVisible((prev) => !prev)
    }

    return (
        <>
            <nav
                className={`fixed left-0 top-0 z-40 mx-auto h-screen w-16 -translate-x-full bg-quartiary-light bg-gradient-to-b from-quartiary-light from-30% to-navGradient py-8 text-white transition-all sm:-translate-x-0 lg:w-64 lg:px-8 ${
                    isVisible ? 'w-72 translate-x-0 pl-8 pr-12' : ''
                }`}
                aria-label="Sidebar"
            >
                <div className="h-full overflow-auto">
                    <div className="mb-16 mt-6 flex items-center justify-center">
                        <Logo className="inline w-6 text-white lg:mr-2" />
                        <span className="hidden lg:inline">
                            Business Control
                        </span>
                    </div>
                    <Arrow
                        className={`absolute -right-8 top-12 -z-10 h-auto w-10 cursor-pointer bg-quartiary-light p-3 sm:-right-6 lg:hidden ${
                            isVisible
                                ? 'rotate-180 rounded-l-full'
                                : 'rotate-0 rounded-r-full'
                        }`}
                        onClick={changeVisibility}
                        data-testid="arrow"
                    />
                    <ul
                        className={`mx-auto w-fit p-2 lg:block lg:w-full ${
                            isVisible ? 'w-full' : ''
                        }`}
                    >
                        <li>
                            <NavLink
                                to="/"
                                className={`navlink ${
                                    isVisible ? 'w-full' : ''
                                } `}
                            >
                                <House className="m-1 h-5 w-5" />
                                <span
                                    className={` ${
                                        isVisible ? ' inline' : 'hidden'
                                    } ml-4 lg:inline`}
                                >
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/employees"
                                className={`navlink ${
                                    isVisible ? 'w-full' : ''
                                } `}
                            >
                                <User className="m-1 h-5 w-5" />
                                <span
                                    className={` ${
                                        isVisible ? 'ml-4 inline' : 'hidden'
                                    } ml-4 lg:inline`}
                                >
                                    Employees
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/finance"
                                className={`navlink ${
                                    isVisible ? 'w-full' : ''
                                } `}
                            >
                                <SquarePoll className="m-1 h-5 w-5" />
                                <span
                                    className={` ${
                                        isVisible ? 'ml-4 inline' : 'hidden'
                                    } ml-4 lg:inline`}
                                >
                                    Finance
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
