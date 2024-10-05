import React from 'react'

const ChildComp = React.memo(
    (props) => {

        console.log("Rerendered")
        
        return (
          <div>
              <button onClick={props.newFunc}>
                  {props.btnName}
              </button>
      
      
          </div>
        )
    }
)


export default ChildComp