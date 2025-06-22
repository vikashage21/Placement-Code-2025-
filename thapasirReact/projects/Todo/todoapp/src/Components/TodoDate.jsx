import React from 'react'
import { useState } from 'react';

import { useEffect } from 'react';

function TodoDate() {

    // todo date
  const [date, setDate] = useState('')


    useEffect(() => {

        const interval = setInterval(() => {


            const now = new Date();
            const formateDate = now.toLocaleDateString()
            const formateTime = now.toLocaleTimeString()

            setDate(`${formateDate} - ${formateTime}`)

        }, 1000);

        return () => clearInterval(interval)



    }, [])
    return (
        <div>
            {date}

        </div>
    )
}

export default TodoDate
