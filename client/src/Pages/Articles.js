import React from 'react'
import { Link } from 'react-router-dom'
const Articles = ( {articles} ) => {
  return (
    <>
         { articles.map((article,index)=>(
                <div key ={index} className='p-4 md:w-1/2'>
                    <div className='h-full border-2 border-gray-200 border-opacity-70 rounded-lg 
                    overflow-hidden'>
                      <Link to ={`/article/${article.name}`}>
                         <img className='object-cover object-center w-full md:h-36 lg:h-46' src
                         = {article.thumbnail} alt="blog"/>
                      </Link>
                      <div className='py-6'>
                          <Link to ={`/article/${article.name}`}>
                            <h3 className='text-lg font-medium text-gray-900 mb-3'>{article.title}</h3>
                          </Link>
                          <p className='mb-3  leading-relaxed'>
                            {article.content[0].substring(0,120)}
                          </p>
                          <div className='flex item-center flex-wrap'>
                            <Link className='text-indigo-500 inline-flex items-center md:mb-2
                             lg:mb-0' to ={`/article/${article.name}`}>
                                Learn more
                            </Link>

                          </div>
                      </div>
                    </div>
                </div>
            ))

            }
    </>
  )
}

export default Articles