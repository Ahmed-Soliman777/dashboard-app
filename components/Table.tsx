"use client"
import { TableProps, UserData } from '@/type';
import React, { useState } from "react";
import Pagination from "@/components/Pagination";

const Table = ({
    data,
    tableTitle,
}: TableProps) => {


    const [search, setSearch] = useState<string>("")

    const filteredData = data.filter(
        (user: UserData) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.address.toLowerCase().includes(search.toLowerCase())
    );
    
    const [pagination, setPagination] = useState<number>(1)

    const [dataPerPagination, setDataPerPagination] = useState<number>(5)

    const lastData: number = pagination * dataPerPagination

    const firstData: number = lastData - dataPerPagination

    const paginationData: UserData[] = filteredData.slice(firstData, lastData)

    const pages = Math.ceil(filteredData.length / dataPerPagination)


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    return (
        <div className="shadow-md rounded-lg mt-5 bg-white overflow-auto">
            <div className="flex flex-col md:flex-row md:justify-between items-center px-6 py-4">
                <h2 className="font-semibold text-lg ">{tableTitle}</h2>
                <input
                    type="text"
                    placeholder="search"
                    className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none"
                    onChange={(e) => handleChange(e)}
                    value={search}
                />
            </div>
            <table className="w-full text-left border-collapse">
                <thead className="border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-gray-700">Name</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Email</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Address</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Phone Number</th>
                        <th className="px-6 py-4 font-semibold text-gray-700">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {paginationData.map((user: UserData) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-900">{user.name}</td>
                            <td className="px-6 py-4 text-gray-600">{user.email}</td>
                            <td className="px-6 py-4 text-gray-600">{user.address}</td>
                            <td className="px-6 py-4 text-gray-600">{user.phone}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${user.isActive
                                        ? "text-green-800 bg-green-100 border border-green-300"
                                        : "text-red-800 bg-red-100 border border-red-300"
                                        }`}
                                >
                                    {user.isActive ? "Active" : "Not Active"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={5} className="py-4 flex justify-center">
                            <Pagination
                                pages={pages}
                                setPagination={setPagination}
                                pagination={pagination}
                            />
                        </td>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default Table
