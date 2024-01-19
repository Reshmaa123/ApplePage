import React from 'react'

const Users = (props) => {
    let data="Reshma"
  return (
    <div>
        <button onClick={()=>props.alert(data)}>clickme</button>
    </div>
  )
}

export default Users