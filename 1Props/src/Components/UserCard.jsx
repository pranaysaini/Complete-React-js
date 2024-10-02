import React from 'react'
const UserCard = (props) => {

  return (
    <div className=' flex flex-col justify-center items-center w-96 gap-y-4 bg-yellow-300 p-10 rounded-xl'>
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <img src={props.image} alt={props.name} className='h-[200px] w-[200px] rounded-full' />
        <p>{props.desc}</p>
    </div>
  )
}

export default UserCard