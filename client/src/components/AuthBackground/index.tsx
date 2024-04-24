import Laptop from '../../assets/_c0553f35-bf46-47e6-b2b9-88890900c6f8.jpg'
import Logo from '../../assets/logo.svg?react'

type AuthBackgroundProps = {
    children: JSX.Element
}

export const AuthBackground = ({ children }: AuthBackgroundProps) => {
    return (
        <div className="flex min-h-screen w-full justify-end">
            <div
                className="fixed left-0 min-h-screen w-[calc(100%-420px)] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${Laptop})` }}
            ></div>
            <div
                className="relative flex min-h-screen min-w-[420px] max-w-[540px] flex-col items-center justify-center bg-white py-4 md:w-3/5  
     md:pr-6 lg:w-2/5"
            >
                <div className="absolute bottom-0 top-0 hidden w-6 bg-white sm:rounded-l-3xl md:-left-6 md:block"></div>
                <Logo className="text-quartiary-light mx-auto w-16  pb-12 lg:w-20" />
                {children}
            </div>
        </div>
    )
}
