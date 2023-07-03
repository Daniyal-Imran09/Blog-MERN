import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css';
import 'whatwg-fetch'
import Home from './Pages/Home';
import Article from './Pages/Article';
import ArticlesList from './Pages/ArticlesList';
import About from './Pages/About';
import Navbar from './Pages/Navbar';
import Notfound from './Pages/Notfound';
function App() {
  
  return (
    <Router>
      <Navbar/>
    <div className='max-w-screen-md mx-auto pt-10'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/article/:name' element={<Article/>}/>
        <Route path='/articles-List' element={<ArticlesList/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>

    </div>
    </Router>

  );
}

export default App;
