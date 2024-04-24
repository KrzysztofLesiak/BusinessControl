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
                <div className="bg-quartiary-light from-quartiary-light to-navGradient bg-gradient-to-b shadow-lg">
                    <Navigation />
                    <div className="ml-0 h-screen overflow-auto bg-primary-light transition-all sm:ml-16 sm:rounded-l-3xl lg:ml-64">
                        <Menu />
                        <section className="my-auto flex h-[calc(100%-120px)] w-full flex-col p-8">
                            {children}
                        </section>
                    </div>
                </div>
            )}
        </>
    )
}
