import { Clock } from '../Clock'
import User from '../../assets/user-solid.svg?react'
import { useAppSelector } from '../../redux/hooks'
import { useUsers } from '../../hooks/useUsers'

export const Menu = () => {
    const user = useAppSelector((state) => state.users.user)

    const { loginNavigation } = useUsers()

    return (
        <div className="mx-6 my-8 flex justify-between lg:left-64">
            <Clock />
            <div
                onClick={loginNavigation}
                className="flex h-fit rounded-full border-2 border-grey-light px-4 py-2 text-secondary-light shadow-lg"
            >
                <User className="mr-4 h-5 w-5" />
                <span>{user.user_id ? 'Logout' : 'Login'}</span>
            </div>
        </div>
    )
}
