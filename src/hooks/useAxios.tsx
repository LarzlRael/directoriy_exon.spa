import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig, AxiosResponseHeaders } from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL

const instancia = axios.create()

const useAxios = <T extends object>(axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>((null as unknown) as T)
  const [error, setError] = useState<any>('')
  const [loading, setLoading] = useState(true)
  const [header, setheader] = useState<AxiosResponseHeaders>()
  const fetchData = async () => {
    try {
      const result = axiosParams?.url
        ? await instancia.request(axiosParams)
        : null
      setResponse(result?.data)
      setheader(result?.headers)
    } catch (error) {
      setError(error as string)
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

  return { response, error, loading, reload, header }
}
export default useAxios
