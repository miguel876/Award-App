import { useEffect, useState } from "react"

export default function useFetch(url){
    const [{ data, loading, error }, setData] = useState({ data: [], loading: false, error: false})

    useEffect(() => {
        setData((d) => ({...d, loading: true }))
        fetch(url)
            .then(res => res.json())
            .then(data => setData((d) => ({...d, data })))
            .catch(error => setData((d) => ({...d, error })))
            .finally(() => setData((d) => ({...d, loading: false })))
        
    }, [url])

    return { data, error, loading }

}