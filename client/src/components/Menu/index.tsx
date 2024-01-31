import { Link } from 'react-router-dom'
import { Clock } from '../Clock'
import User from '../../assets/user-solid.svg?react'

export const Menu = () => {
    return (
        <div className="mx-6 my-8 flex justify-between lg:left-64">
            <Clock />
            <Link
                to="/login"
                className="flex h-fit rounded-full border-2 border-grey-light px-4 py-2 text-secondary-light shadow-lg"
            >
                <User className="mr-4 h-5 w-5" />
                <span>Login</span>
            </Link>
        </div>
    )
}
