"use client"

import { IFormInput } from "@/type"
import { SubmitHandler, useForm } from "react-hook-form"


const LoginForm = () => {



    const { handleSubmit, register, formState: { errors } } = useForm<IFormInput>()


    const onSubmit: SubmitHandler<IFormInput> = (data) => {

        console.log(data)

    }

    return (


        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto w-11/12 md:w-8/12 lg:w-6/12 p-5 bg-white rounded-lg"
        >

            <label htmlFor="first-name">First Name</label>
            <input
                type="text"
                id="first-name"
                className="w-full border border-[#c0bfbf] rounded px-2 py-1 mt-1"
                {...register("FirstName", { required: "First name is required" })}
            />

            {errors.FirstName?.message &&
                <div className="text-red-500 mt-2">{errors.FirstName?.message}</div>
            }

            <label htmlFor="last-name" className="inline-block mt-5">Last Name</label>
            <input
                type="text"
                id="last-name"
                className="w-full border border-[#c0bfbf] rounded px-2 py-1 mt-1"
                {...register("LastName", { required: "Last name is required" })}
            />

            {errors.LastName?.message &&
                <div className="text-red-500 mt-2">{errors.LastName?.message}</div>
            }
            <button className="block mt-5 mx-auto border border-[#c0bfbf] p-2 rounded cursor-pointer transition-all duration-500 hover:bg-green-300 hover:border-green-600 hover:text-green-800 ">Submit</button>
        </form>
    )
}

export default LoginForm
