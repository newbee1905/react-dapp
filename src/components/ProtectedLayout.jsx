import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Loading from '@/components/Loading'

import useLoginStore from '@/stores/login'

function ProtectedLayout() {
 //  const [checking, setChecking] = useState(true)
 //  const [result, setResult] = useState("")
	// const setLogon = useLoginStore((state) => state.setLogon)
	//
	// const navigate = useNavigate()
	//
 //  useEffect(() => {
 //    if (!checking)
 //      return;
 //    (async () => {
 //      const req = await fetch("http://localhost:8000/v1/users/", {
 //        credentials: "include",
 //        mode: "cors", 
 //      })
 //      const req_result = await req.json()
 //      setChecking(false)
 //      if (req_result.hasOwnProperty('detail')) {
 //        setResult(req_result.detail)
 //      }
 //    })()
 //  }, [])
	//
 //  if (!checking && result.length > 0) {
 //    setLogon(false)
 //    navigate("/login")
 //  }
	//
 //  if (checking) {
 //    return <Loading />
 //  }
	//
 //  setLogon(true)

	return (
    <Outlet />
	)
}

export default ProtectedLayout
