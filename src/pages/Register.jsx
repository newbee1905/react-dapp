import { useState } from 'react'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')

	const navigate = useNavigate()

  return (
    <section className="bg-gray-800">
      <div
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <h1
          href="#"
          className="flex items-center mb-6 text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
        >
          Register new Account
        </h1>

        <div
          className="w-full rounded-lg shadow border sm:max-w-lg bg-gray-900 border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-10 sm:p-8">
            <form 
              className="space-y-4 md:space-y-6"
              onSubmit={async (event) => {
                event.preventDefault()
                
                if (password !== repassword) {
                  toast.error("Password and Repassword are not the same!")
                  return
                }


                const user_req = await fetch("http://localhost:8000/v1/users/register", {
                  method: "POST",
                  credentials: "include",
                  mode: "cors", 
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email,
                    password,
                    username
                  })
                })
                const user = await user_req.json()

                if (user.hasOwnProperty('detail')) {
                  let error = ""
                  if (user.detail.include("UNIQUE CONSTRAINT")) {
                    error = "User already exist."
                  }
                  toast.error(error)
                  return
                }
                
                toast.success("Successful Creating User.")
                navigate('/login', 2000)
              }}
            >
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  onChange={event => setUsername(event.target.value)}
                  value={username}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@company.com"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
                  required=""
                />
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
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
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="repassword"
                    id="repassword"
                    placeholder="••••••••"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    onChange={event => setRepassword(event.target.value)}
                    value={repassword}
                    required=""
                  />
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>

              <p className="font-light text-gray-400">
                Already have an account? {"\t"}
                <Link
                  to="/login"
                  classNameName="font-medium hover:underline text-primary-500"
                >
                  Login 
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
