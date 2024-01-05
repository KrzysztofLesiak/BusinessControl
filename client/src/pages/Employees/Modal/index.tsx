import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

type ModalProps = {
    children: ReactElement
}

export const Modal = ({ children }: ModalProps) => {
    const navigate = useNavigate()

    const handleNavigate = () => navigate('/employees')

    return (
        <>
            <div
                className="fixed bottom-0 left-0 right-0 top-0 z-20 rounded-l-3xl bg-dark bg-opacity-35 sm:left-16 lg:left-64"
                onClick={handleNavigate}
            ></div>
            <div className="fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 sm:left-[calc(50%+32px)] lg:left-[calc(50%+128px)]">
                <div className="m-auto flex h-full min-w-[600px] overflow-auto px-2">
                    {children}
                </div>
            </div>
        </>
    )
}
