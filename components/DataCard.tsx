import { DataCardProps } from "@/type"

const DataCard = ({
    icon,
    title,
    description,
}: DataCardProps) => {
    return (
        <section className="bg-white rounded shadow-md p-2 overflow-hidden">
            <div className="flex items-center gap-2 mb-2 ">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600 bg-blue-200 p-2 rounded " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d={icon} />
                </svg>

                <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h2>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
            <div className="">total: 55</div>
        </section>
    )
}

export default DataCard
