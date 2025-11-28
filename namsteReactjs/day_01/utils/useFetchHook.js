import React from 'react'

import { useEffect, useState } from 'react'

const useFetchHook = (id) => {
    let [data, setData] = useState('')





    async function getData() {
        let res = await fetch('https://dummyjson.com/recipes');
        let data = await res.json()
        setData(data)
    }

    useEffect(() => {
        getData()

    }, [])

    return data;


}

export default useFetchHook
