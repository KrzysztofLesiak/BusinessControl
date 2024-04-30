import { Menu } from '../Menu'
import { Navigation } from '../Navigation'
import { useEffect } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { useUsers } from '../../hooks/useUsers'

type AppRouteProps = {
    children: JSX.Element
}

export const AppRoute = ({ children }: AppRouteProps) => {
    const { isAuthenticated } = useAppSelector((state) => state.users)
    const { checkAuth } = useUsers()

    useEffect(() => {
        if (!isAuthenticated) checkAuth()
    }, [checkAuth, isAuthenticated])

    return (
        <>
            {!isAuthenticated ? (
                <></>
            ) : (
                <div className="overflow-hidden bg-quartiary-light bg-gradient-to-b from-quartiary-light to-navGradient shadow-lg">
                    <Navigation />
                    <div className="ml-0 h-screen overflow-auto bg-primary-light transition-all sm:ml-16 sm:rounded-l-3xl lg:ml-64">
                        <section className="my-auto flex h-full w-full flex-col overflow-auto p-8 pt-0">
                            <Menu />
                            {children}
                        </section>
                    </div>
                </div>
            )}
        </>
    )
}
