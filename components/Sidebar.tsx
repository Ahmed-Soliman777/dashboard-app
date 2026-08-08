"use client"

import Link from "next/link"

import { useState } from "react"

import { AiFillProduct } from "react-icons/ai";

import { MdCategory, MdAdminPanelSettings, MdDashboard, MdOutlineOpenInFull, MdCloseFullscreen } from "react-icons/md";

import { FaUsers } from "react-icons/fa";

import { SiBrandfolder } from "react-icons/si";


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <aside className={`bg-white p-4 m-3 rounded shadow-lg ${isOpen ? 'w-64' : 'w-20'} *:transition-all duration-300 overflow-hidden ${isOpen ? '' : 'flex flex-col items-center'}`}>
            <h2 className="text-blue-600 font-bold text-2xl flex items-center gap-1">
                <MdDashboard />
                {isOpen && "Dashboard"}
            </h2>

            <ul className="my-5">

                <li>
                    <Link href={'/products'} className={`flex gap-1 items-center text-[16px]  my-4`}>
                        <AiFillProduct
                            size={20}
                            title="Products"
                        />
                        {isOpen && "Products"}
                    </Link>
                </li>
                <li>
                    <Link href={'/categories'} className={`flex gap-1 items-center text-[16px  ]  my-4`}>
                        <MdCategory
                            size={20}
                            title="Categories"
                        />
                        {isOpen && "Categories"}
                    </Link>
                </li>
                <li>
                    <Link href={'/brands'} className={`flex gap-1 items-center text-[16px  ]  my-4`}>
                        <SiBrandfolder
                            size={20}
                            title="Brands"
                        />
                        {isOpen && "Brands"}
                    </Link>
                </li>
                <li>
                    <Link href={'/users'} className={`flex gap-1 items-center text-[16px]  my-4 `}>
                        <FaUsers
                            size={20}
                            title="Users"
                        />
                        {isOpen && "Users"}
                    </Link>
                </li>
                <li>
                    <Link href={'/settings'} className={`flex gap-1 items-center text-[16px]  my-4`}>
                        <MdAdminPanelSettings
                            size={20}
                            title="Settings"
                        />
                        {isOpen && "Settings"}
                    </Link>
                </li>
            </ul>

            <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 text-white px-2 py-2 rounded mt-4">
                {isOpen ? <MdCloseFullscreen
                    size={20}
                    title="collapse sidebar" /> : <MdOutlineOpenInFull
                    size={20}
                    title="open sidebar" />}
            </button>

        </aside>
    )
}

export default Sidebar
