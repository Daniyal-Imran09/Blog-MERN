import React from 'react'
import Articlecontent from './Article-content'
import Articles from './Articles'
const ArticlesList = () => {
  return (
    <div>
        <h1 className='font-bold text-2xl sm:text-4xl my-5 text-gray-900'>Articles</h1>
        <div className='container py-4 mx-auto'>
            <div className='flex flex-wrap -m-0'>
           <Articles articles = { Articlecontent}/>
            </div>
        </div>
    </div>
  )
}

export default ArticlesList