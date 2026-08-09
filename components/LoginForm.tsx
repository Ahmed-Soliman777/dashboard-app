"use client"

import { IFormInput } from "@/type"
import { SubmitHandler, useForm } from "react-hook-form"
import { useRouter } from "next/navigation"


const LoginForm = () => {


    const router = useRouter()

    const { handleSubmit, register, formState: { errors } } = useForm<IFormInput>()


    const onSubmit: SubmitHandler<IFormInput> = (data) => {

        console.log(data)

        router.replace('/dashboard')

    }

    return (


        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto w-11/12 md:w-8/12 lg:w-5/12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300"
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>

            <div className="mb-4">
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-600 mb-1">
                    First Name
                </label>
                <input
                    type="text"
                    id="first-name"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-gray-800 outline-none transition-all duration-300 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    placeholder="Enter your first name"
                    {...register("FirstName", { required: "First name is required" })}
                />
                {errors.FirstName?.message && (
                    <div className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                         {errors.FirstName?.message}
                    </div>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-600 mb-1">
                    Last Name
                </label>
                <input
                    type="text"
                    id="last-name"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-gray-800 outline-none transition-all duration-300 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    placeholder="Enter your last name"
                    {...register("LastName", { required: "Last name is required" })}
                />
                {errors.LastName?.message && (
                    <div className="text-rose-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                         {errors.LastName?.message}
                    </div>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl cursor-pointer"
            >
                Submit
            </button>
        </form>
    )
}

export default LoginForm
