import DataCard from "@/components/DataCard"
import Sidebar from "@/components/Sidebar"
import Table from "@/components/Table"


import { users } from "@/data"
import { MdAdminPanelSettings, MdCategory, MdDashboard } from "react-icons/md"
import Link from "next/link"
import { FaUsers } from "react-icons/fa"
import { SiBrandfolder } from "react-icons/si"
import { AiFillProduct } from "react-icons/ai"
import Image from "next/image"

const page = () => {

  const username: string = "John Doe"


  return (
    <main className="flex flex-col lg:flex-row">

      <h2 className="lg:hidden text-blue-600 font-bold text-2xl flex items-center gap-1 mx-4 mt-4">
        <MdDashboard />
        Dashboard
      </h2>

      <Sidebar />

      <section className="w-full p-4">

        <div className="flex items-center gap-5 mb-1 lg:my-4">
          <h2 className="font-bold text-xl">
            Welcome, {username}
          </h2>

          <div>
            <Image
              src="/user.jpg"
              alt="brand"
              width={40}
              height={40}
              className={`rounded-full my-4 lg:hidden`}
            />
          </div>

        </div>

        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          <DataCard
            title="Products"
            description="Track products data"
            icon="M17.6647 3.69423c-.0811-.25251-.2591-.46247-.495-.58368-.2359-.12121-.5103-.14375-.7628-.06265l-5.7127 1.83462c-.1263.04057-.2389.10389-.3349.18397C10.2478 5.02354 10.1266 5 10 5H4c-.55228 0-1 .44772-1 1v6c0 1.8638 1.27477 3.4299 3 3.874V19H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h4c.55228 0 1-.4477 1-1s-.44772-1-1-1H8v-3.126c1.72523-.4441 3-2.0102 3-3.874V9.10505l.8825 2.74795c.5699 1.7746 2.2625 2.8759 4.0409 2.7712l.9558 2.9763-.9521.3057c-.5258.1689-.8152.7321-.6463 1.2579.1689.5258.732.8152 1.2579.6463l3.8084-1.2231c.5258-.1688.8152-.732.6463-1.2578-.1688-.5259-.732-.8152-1.2578-.6464l-.9522.3058-.9558-2.9763c1.5068-.9503 2.2417-2.8312 1.6718-4.60574l-1.8347-5.71263ZM9 7v1H5V7h4Zm7.0663-1.74212.3058.9521-3.8085 1.22309-.3057-.95211 3.8084-1.22308Z" clip-rule="evenodd"
          />

          <DataCard
            title="Categories"
            description="Track categories data"
            icon="M17.6647 3.69423c-.0811-.25251-.2591-.46247-.495-.58368-.2359-.12121-.5103-.14375-.7628-.06265l-5.7127 1.83462c-.1263.04057-.2389.10389-.3349.18397C10.2478 5.02354 10.1266 5 10 5H4c-.55228 0-1 .44772-1 1v6c0 1.8638 1.27477 3.4299 3 3.874V19H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h4c.55228 0 1-.4477 1-1s-.44772-1-1-1H8v-3.126c1.72523-.4441 3-2.0102 3-3.874V9.10505l.8825 2.74795c.5699 1.7746 2.2625 2.8759 4.0409 2.7712l.9558 2.9763-.9521.3057c-.5258.1689-.8152.7321-.6463 1.2579.1689.5258.732.8152 1.2579.6463l3.8084-1.2231c.5258-.1688.8152-.732.6463-1.2578-.1688-.5259-.732-.8152-1.2578-.6464l-.9522.3058-.9558-2.9763c1.5068-.9503 2.2417-2.8312 1.6718-4.60574l-1.8347-5.71263ZM9 7v1H5V7h4Zm7.0663-1.74212.3058.9521-3.8085 1.22309-.3057-.95211 3.8084-1.22308Z" clip-rule="evenodd"
          />

          <DataCard
            title="Users"
            description="Track users data"
            icon="M17.6647 3.69423c-.0811-.25251-.2591-.46247-.495-.58368-.2359-.12121-.5103-.14375-.7628-.06265l-5.7127 1.83462c-.1263.04057-.2389.10389-.3349.18397C10.2478 5.02354 10.1266 5 10 5H4c-.55228 0-1 .44772-1 1v6c0 1.8638 1.27477 3.4299 3 3.874V19H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h4c.55228 0 1-.4477 1-1s-.44772-1-1-1H8v-3.126c1.72523-.4441 3-2.0102 3-3.874V9.10505l.8825 2.74795c.5699 1.7746 2.2625 2.8759 4.0409 2.7712l.9558 2.9763-.9521.3057c-.5258.1689-.8152.7321-.6463 1.2579.1689.5258.732.8152 1.2579.6463l3.8084-1.2231c.5258-.1688.8152-.732.6463-1.2578-.1688-.5259-.732-.8152-1.2578-.6464l-.9522.3058-.9558-2.9763c1.5068-.9503 2.2417-2.8312 1.6718-4.60574l-1.8347-5.71263ZM9 7v1H5V7h4Zm7.0663-1.74212.3058.9521-3.8085 1.22309-.3057-.95211 3.8084-1.22308Z" clip-rule="evenodd"
          />

        </div>

        <ul className="flex gap-5 items-center justify-center lg:hidden">

          <li>
            <Link href={'/products'} className={`flex gap-1 items-center text-[16px]  my-4`}>
              <AiFillProduct
                size={20}
                title="Products"
              />
            </Link>
          </li>
          <li>
            <Link href={'/categories'} className={`flex gap-1 items-center text-[16px  ]  my-4`}>
              <MdCategory
                size={20}
                title="Categories"
              />
            </Link>
          </li>
          <li>
            <Link href={'#'} className={`flex gap-1 items-center text-[16px  ]  my-4`}>
              <SiBrandfolder
                size={20}
                title="Brands"
              />
            </Link>
          </li>
          <li>
            <Link href={'#'} className={`flex gap-1 items-center text-[16px]  my-4 bg-blue-200 text-blue-700 p-1 rounded`}>
              <FaUsers
                size={20}
                title="Users"
              />
            </Link>
          </li>
          <li>
            <Link href={'#'} className={`flex gap-1 items-center text-[16px]  my-4`}>
              <MdAdminPanelSettings
                size={20}
                title="Settings"
              />
            </Link>
          </li>
        </ul>

        <Table
          data={users}
          tableTitle="Users Data"
        />

      </section>
    </main>
  )
}

export default page
