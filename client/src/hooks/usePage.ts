import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { useEffect } from 'react'
import { nextPage, prevPage, updatePage } from '../redux/slice/employeesSlice'

type UsePageProps = {
    nextPageHandler: () => void
    prevPageHandler: () => void
}

export const usePage = (): UsePageProps => {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const pageParam = Number(queryParams.get('page'))
    const dispatch = useAppDispatch()

    const { page, maxPage } = useAppSelector((state) => state.employees)

    const navigate = useNavigate()

    const nextPageHandler = () => {
        dispatch(nextPage())
    }

    const prevPageHandler = () => {
        dispatch(prevPage())
    }

    useEffect(() => {
        page > 1
            ? queryParams.set('page', `${page}`)
            : queryParams.delete('page')

        navigate(`${location.pathname}?${queryParams}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps

        if (page > maxPage) dispatch(updatePage(1))
    }, [page])

    useEffect(() => {
        if (pageParam !== 0) dispatch(updatePage(pageParam))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        nextPageHandler,
        prevPageHandler,
    }
}
