import React from "react";
import { useState } from "react";

import PackageContext from './context.js';

const Provider = props => {
    const [mission, setMission] = useState({
        mname: 'got to Russia',
        agent: '007',
        accept: "not accepted"
    })
    return (
        <PackageContext.Provider
            value={
                {
                    data: mission,
                    isMissionAccepted: () => {
                        setMission({ ...mission, accept: 'Accepted' })
                    }
                }
            }>
            {
                props.children
            }
        </PackageContext.Provider>
    )
}

export default Provider;