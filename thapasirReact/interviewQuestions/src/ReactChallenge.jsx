import React, { useState } from 'react'


const users = [{
    name: "John",
    age: 30,
    city: "New York"
}, {
    name: "Jane",
    age: 25,
    city: "Los Angeles"
}, {
    name: "Mike",
    age: 35,
    city: "Chicago"
}]

function ReactChallenge() {
    let [user, setUser] = useState(users)
    return (
        <div>
            {
                user.map((items, index) => {
                    return (
                        <>
                            <div key={index}>
                                <h1 className='text-2xl font-bold'>{items.name}</h1>
                                <p className='text-lg'>Age: {items.age}</p>
                                <p className='text-lg'>City: {items.city}</p>

                            </div>


                        </>
                    )
                })
            }

        </div>
    )
}

export default ReactChallenge
