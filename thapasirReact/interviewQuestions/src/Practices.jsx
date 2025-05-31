import React from 'react'

function Practices() {

    const student =[]
  return (
    <div>
      <h1>interview</h1>
      {/* <p>{student.length && "no student found"}</p> */}
      
     <p>{student.length===0 && "no student found"}</p>
      <p>number of student :{student.length}</p>

    </div>
  )
}

export default Practices
