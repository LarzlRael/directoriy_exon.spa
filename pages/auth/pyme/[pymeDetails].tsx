import React, { useEffect, useState } from 'react'
import AdminDashBoard from '../../../src/components/dashboard/AdminDashBoard'
import { useRouter } from 'next/router'
import { PymeInterfaceResponse } from '../../../src/interfaces/pymeResponse'
import useAxiosAuth from '../../../src/hooks/useAxios'

const PymeDetails = () => {
  const router = useRouter()
  let { pymeDetails } = router.query
  /* const [url, seturl] = useState('') */
  const { response: onePyme, loading, reload } = useAxiosAuth<
    PymeInterfaceResponse
  >({
    url: `/pymes/${pymeDetails}`,
    method: 'GET',
  })

  /* useEffect(() => {
    console.log(pymeDetails)

    if (onePyme != undefined) {
      reload()
      console.log(onePyme.departamento)
    }
  }, [pymeDetails]) */

  useEffect(() => {
    if (router.isReady) {
      /* seturl(pymeDetails as string) */
      reload()
    }
  }, [router.isReady])

  return (
    <AdminDashBoard>
      {!loading ? <div>{onePyme.departamento}</div> : 'Loading'}
    </AdminDashBoard>
  )
}

export default PymeDetails
