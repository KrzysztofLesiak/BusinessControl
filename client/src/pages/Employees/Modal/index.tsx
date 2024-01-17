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
            <div className="fixed bottom-0 left-0 right-0 top-0 z-20 overflow-auto rounded-l-3xl sm:left-16 lg:left-64">
                <div
                    className="fixed bottom-0 left-0 right-0 top-0 bg-dark bg-opacity-35"
                    onClick={handleNavigate}
                ></div>
                <div className="absolute left-1/2 top-1/2 flex h-full min-w-[600px] -translate-x-1/2  -translate-y-1/2 overflow-auto px-2">
                    {children}
                </div>
            </div>
        </>
    )
}
