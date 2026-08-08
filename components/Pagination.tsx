import { PaginationProps } from "@/type"

const Pagination = ({
    pages,
    setPagination,
    pagination
}: PaginationProps) => {

    const pagesIndeces: number[] = []

    for (let i = 1; i <= pages; i++) {
        pagesIndeces.push(i)
    }

    return (
        <div>
            {
                pagesIndeces.map((page: number) => (
                    <button 
                    key={page} 
                    onClick={() => setPagination(page)}
                    className={`border border-gray-500 rounded py-0.5 px-2 mx-1 cursor-pointer  ${pagination === page ? 'bg-blue-400 text-white border-0' : ""}`}
                    >{page}</button>
                ))
            }
        </div>
    )
}

export default Pagination
