import React, { useContext } from 'react'
import {newContext} from '../App'

function ChildC() {

    const user = useContext(newContext);

  return (
    <div>
        {/* Ensure the value is rendered correctly */}
      {user ? user.name : "No user found"}
    </div>
  )
}

export default ChildC