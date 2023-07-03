import React from 'react'

const Clist = ({comment}) => {
  return (
    <div>
        <h1 className='font-bold text-gray-950 sm:text-4xl text-2xl my-7'>Comments:</h1>
   { comment.map((com,index)=>(
    <div key={index}>
        <h4 className='font-bold text-xl'>{com.username}</h4>
        <p className='mt-1 mb-4'>{com.idea}</p>
    </div>
    ))}
   
    </div>  
      )
}

export default Clist