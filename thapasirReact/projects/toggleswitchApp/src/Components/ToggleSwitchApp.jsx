import React, { useState } from 'react'

function ToggleSwitchApp() {
    let [isActive, setIsActive] = useState(false);
    const toggleController = () => {

      setIsActive((prev) => !prev)

    }

    console.log(isActive)
    return (
        <div className='container'>
            <div className={`  ${isActive ? " btn-grey-flex" : "btn-grey"}`} onClick={toggleController}>
                <div className="sub-container">

                     <div className={`${isActive ? "toggle-btn-active" : "toggle-btn"}`}>
                    <div className="text_of">
                        {
                            isActive ? "ON " : "OFF"
                        }
                    </div>
                </div>

                </div>
               
            </div>

        </div>
    )
}

export default ToggleSwitchApp
