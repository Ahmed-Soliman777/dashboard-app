import Sidebar from "@/components/Sidebar"

const page = () => {
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full p-4">
        dashboard
      </section>
    </main>
  )
}

export default page
