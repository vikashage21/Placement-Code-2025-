import React from 'react'

function Button(props) {
    console.log(props)
    let {children , fun} = props
  return (
    <div>
      <button onClick={fun}> {children}</button>
    </div>
  )
}

export default Button
