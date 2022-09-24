import { useState, useEffect } from 'react';
import {api} from "../api";

function useFetch(url:any) {
    const [data, setData] = useState<any | null>(null);
    const [error,setError] = useState<any | null>(null);
    const [loading,setLoading] = useState<any | null>(null);

    useEffect(() => {
        setData(null);
        setLoading(true)
        api.get(url)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                setError(err)
            })
            .finally(()=>{
                setLoading(false);
            })
    }, [url])

return {data, error, loading} }
export default useFetch