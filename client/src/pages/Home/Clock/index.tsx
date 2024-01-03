import { useEffect, useState } from 'react'

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    const timer = () => {
        setDate(new Date())
    }

    useEffect(() => {
        const interval = setInterval(timer, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="m-16 mx-auto px-4 text-center text-blue1-dark sm:text-left ">
            <h1 className="text-2xl font-bold">Hello, Username!</h1>
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
