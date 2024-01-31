import { Menu } from '../Menu'
import { Navigation } from '../Navigation'

type AppWraperProps = {
    children: JSX.Element
}

export const AppWrapper = ({ children }: AppWraperProps) => {
    return (
        <div className="bg-secondary-light bg-gradient-to-b from-secondary-light to-blue3-light shadow-lg">
            <Navigation />
            <div className="ml-0 h-screen overflow-auto bg-primary-light transition-all sm:ml-16 sm:rounded-l-3xl lg:ml-64">
                <Menu />
                <section className="my-auto flex h-[calc(100%-120px)] w-full flex-col p-8">
                    {children}
                </section>
            </div>
        </div>
    )
}
