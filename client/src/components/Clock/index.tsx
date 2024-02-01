import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'

export const Clock = () => {
    const [date, setDate] = useState(new Date())
    const user = useAppSelector((state) => state.users.user)

    const timer = () => {
        setDate(new Date())
    }

    useEffect(() => {
        const interval = setInterval(timer, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="text-center text-blue1-dark sm:text-left ">
            <h1 className="text-2xl font-bold">Hello, {user.first_name}!</h1>
            <p>
                {new Intl.DateTimeFormat('en-GB', {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                    timeZone: 'Europe/Berlin',
                }).format(date)}
            </p>
        </div>
    )
}
