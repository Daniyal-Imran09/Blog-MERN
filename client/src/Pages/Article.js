import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import articles from './Article-content';
import Articles from './Articles';
import Notfound from './Notfound';
import Clist from './Clist';
import AddingComment from './AddingComment';
const Article = () => {
    const {name} = useParams();
    const [articleinfo,setarticleinfo] = useState({comments:[]})
    useEffect(()=>{
      const fetchdata = async ()=>{
           const f = await fetch(`/articles/${name}`)
           const body =  await f.json()
           console.log(body);
           setarticleinfo(body);
      };
      fetchdata();
      console.log('componnet mounted');
    },[name])
    const article = articles.find((article)=> name === article.name);
    if(!article) return <Notfound/>
    const art = articles.filter((article) => name !== article.name)
  return (
    <div>
        <h1 className='font-bold text-2xl sm:text-4xl my-8 text-gray-900'>This is {article.title}</h1>
       {article.content.map((paragraph,index)=>
      (
        <p key={index}>{paragraph}</p>
      ) )

       }

      <Clist comment={articleinfo.comments}/>
<AddingComment articlename={name}/>
       <h1 className='font-bold text-2xl my-4'>other articles</h1>
      <div className='flex flex-wrap -m-4'>
        <Articles articles = {art}/>
      </div>

    </div>
  )
}

export default Article