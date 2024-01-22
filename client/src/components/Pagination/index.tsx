import Chevron from '../../assets/chevron-up-solid.svg?react'
import { usePage } from '../../hooks/usePage'
import { useAppSelector } from '../../redux/hooks'

export const Pagination = () => {
    const { prevPageHandler, nextPageHandler } = usePage()
    const { page, maxPage } = useAppSelector((state) => state.employees)

    return (
        <div className="mx-auto my-4 w-fit rounded-lg bg-white p-2 shadow-2xl">
            <div className="flex">
                <span onClick={prevPageHandler}>
                    <Chevron className="h-full -rotate-90" />
                </span>
                <span>
                    {page} / {maxPage}
                </span>
                <span onClick={nextPageHandler}>
                    <Chevron className="h-full rotate-90" />
                </span>
            </div>
        </div>
    )
}
