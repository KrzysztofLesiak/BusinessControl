import Loader from '../../assets/spinner-solid.svg?react'

export const Loading = () => {
    return (
        <div className="m-auto h-full w-full p-12 text-secondary-light">
            <Loader className="m-auto h-12 w-12 animate-spin bg-opacity-0 bg-none" />
        </div>
    )
}
