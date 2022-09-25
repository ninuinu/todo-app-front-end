import { useState, useEffect } from 'react';
import {api} from "../api";
import qs from 'qs';

function useFetch(route:any, method = 'get', args?:any) {
    const [data, setData] = useState<any | null>(null);
    const [error,setError] = useState<any | null>(null);
    const [loading,setLoading] = useState<any | null>(null);
    let url = route;
    let params = {};

    if(args) {
        params = qs.stringify(args);
    }

    console.log(params)
    useEffect(() => {
        setData(null);
        setLoading(true);
            api({url:url, method:method, params})
                .then(res => {
                    setData(res.data);
                })
                .catch(err => {
                    setError(err);
                })
                .finally(()=>{
                    setLoading(false);
                })
    }, [url])

return {data, error, loading} }
export default useFetch