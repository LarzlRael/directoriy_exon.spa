import React, { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL

/* axios.interceptors.request.use(
  (config) => {
    const token_seguridad = window.localStorage.getItem('token_seguridad')
    if (token_seguridad) {
      config.headers.Authorization = 'Bearer ' + token_seguridad
      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  },
) */
const useAxiosAuth = <T extends object>(axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>((null as unknown) as T)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const result = axiosParams?.url ? await axios.request(axiosParams) : null
      setResponse(result?.data)
    } catch (err) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  function reload() {
    fetchData()
  }

  useEffect(() => {
    const ac = new AbortController()
    fetchData()
    return () => ac.abort()
  }, [])

  return { response, error, loading, reload }
}
export default useAxiosAuth
