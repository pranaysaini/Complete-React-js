import React from 'react'

function Card(props) {
  return (
    <div>
        <div>
            <input type="text" onChange={(e) => props.setName(e.target.value)} className='border border-black' />
            <p className='text-lg'>Written text is of {props.title}: {props.name} </p>
        </div>
    </div>
  )
}

export default Card