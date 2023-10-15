import { useState } from 'react'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

	const navigate = useNavigate()

  return (
    <section className="bg-gray-800">
      <div
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <h1
          className="flex items-center mb-6 text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
        >
          Sign In to your account
        </h1>

        <div
          className="w-full rounded-lg shadow border md:mt-0 sm:max-w-lg xl:p-0 bg-gray-900 border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-10 sm:p-8">
            <form 
              className="space-y-4 md:space-y-6"
              onSubmit={async (event) => {
                event.preventDefault()

                const user_req = await fetch("http://localhost:8000/v1/users/login", {
                  method: "POST",
                  credentials: "include",
                  mode: "cors", 
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email,
                    password
                  })
                })
                const user = await user_req.json()

                if (user.hasOwnProperty('detail')) {
                  toast.error(user.detail)
                  return
                }
                
                toast.success("Successful Logging in.")
                navigate('/', 2000)
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                  >Your email</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  onChange={event => setEmail(event.target.value)}
                  placeholder="name@company.com"
                  value={email}
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  onChange={event => setPassword(event.target.value)}
                  value={password}
                  required=""
                />
              </div>
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>

              <p className="text-sm font-light text-gray-400">
                Don’t have an account yet? {"\t"}
                <Link
                  to="/register"
                  className="font-medium hover:underline text-primary-500"
                >
                  Register
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
