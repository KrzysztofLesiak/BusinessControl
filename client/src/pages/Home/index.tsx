import { EmployeesDashboard } from './EmployeesDashboard'
import { FinancesDashboard } from './FinancesDashboard'

export const Home = () => {
    return (
        <section>
            <div className="mx-auto grid h-full grid-cols-1 grid-rows-[300px] gap-8 pb-6 md:grid-cols-2 xl:grid-cols-3 ">
                <EmployeesDashboard />
                <FinancesDashboard />
            </div>
        </section>
    )
}
