const LoginForm = () => {
    return (
        <form className="mx-auto w-11/12 md:w-8/12 lg:w-6/12 p-5 bg-white rounded-lg">
            <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" className="w-full border border-[#c0bfbf] rounded px-2 py-1 mt-1 mb-5" />
            </div>
            <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name"  className="w-full border border-[#c0bfbf] rounded px-2 py-1 mt-1 mb-5" />
            </div>

            <button className="block mx-auto border border-[#c0bfbf] p-2 rounded cursor-pointer transition-all duration-500 hover:bg-green-300 hover:border-green-600 hover:text-green-800 ">Submit</button>
        </form>
    )
}

export default LoginForm
