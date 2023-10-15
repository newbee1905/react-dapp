import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

import Loading from '@/components/Loading'

import useLoginStore from '@/stores/login'

function ProtectedLayout() {
  const [checking, setChecking] = useState(true)
	const [isLogon, setLogon] = useLoginStore((state) => [
		state.isLogon,
		state.setLogon,
	])

	const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const req = await fetch("http://localhost:8000/v1/users/", {
        credentials: "include",
        mode: "cors", 
      })
      const result = await req.json()
      setChecking(false)
      if (result.hasOwnProperty('detail')) {
        setLogon(false)
      } else {
        setLogon(true)
      }
    })()
  })

  if (!checking && !isLogon) {
    navigate("/login")
  }

  if (checking) {
    return <Loading />
  }

	return (
    <Outlet />
	)
}

export default ProtectedLayout
