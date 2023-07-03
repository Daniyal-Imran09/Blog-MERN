import React,{useState} from 'react'
import { json } from 'react-router-dom';

const AddingComment = ({articlename}) => {
    const [username,setusername] = useState('');
   const [commenttext,setcommenttext] = useState('');
  const addingcommentinto = async ()=>{
    console.log('addingcommebtinygui')
 const  result = await fetch(`/articles/${articlename}/add-comment`,{
    method:"post",
    body : JSON.stringify({username,idea : commenttext}),
    headers:{
   "Content-Type":"application/json"
    }
 });
 
 const body = await result.json();
 //setarticleinfo(body)
 setcommenttext('')
 setusername('')
  };
  return (
    <form className='shadow rounded px-5 pt-3 pb-4 mb-4'>
        <h3 className='font-bold mb-3 text-xl text-gray-900'>Add a Comment</h3>
        <label className='text-gray-700 mb-4 font-bold text-sm block'>
            name:
        </label>
        <input type='text' value={username}
        onChange={(e)=> setusername(e.target.value)}
         className='shadow appearance-none border rounded w-full py-2 px-3
         focus:outline-none text-gray-700 loading-tight focus:shadow-outline'/>
        <label className='text-gray-700 mb-4 font-bold text-sm block'>
            comment:
        </label>
        <textarea
        rows={4}
        cols={50}
        value={commenttext}
        onChange={(e)=> setcommenttext(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3
         focus:outline-none text-gray-700 loading-tight focus:shadow-outline'
        />

        <button
          onClick={()=>addingcommentinto()}
         className='bg-blue-700 hover:bg-blue-400 text-white font-bold
        py-3 px-6 focus:outline-none focus:shadow-outline'>
            AddComment
        </button>
    </form>
  )
}

export default AddingComment