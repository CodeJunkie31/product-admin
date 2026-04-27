import { useEffect, useState } from "react"

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    if (!url) return

    async function fetchData() {
      const res = await fetch(url)
      const result: T = await res.json()
      setData(result)
    }

    fetchData()
  }, [url])

  return { data }
}