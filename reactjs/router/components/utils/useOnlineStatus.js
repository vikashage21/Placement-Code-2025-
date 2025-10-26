import { useEffect, useState } from "react";

function useOnlineStatus() {
    let  [isOnline, setIsOnline] = useState(true)

    useEffect(() => {

        window.addEventListener('offline', () => {
            setIsOnline(false)

        })
        window.addEventListener('online', () => {
            setIsOnline(true)
        })


    }, [])


    return isOnline;

}

export default useOnlineStatus;