
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';



function App() {


  return (
    <div className="App">
     <Router>
      <div className='navbar'>
     <Link to='/'>Home</Link>
     <Link to='/createPost'>Creat A Post</Link>
      </div>
      <Routes>
      {/* <Route path='/' element={<Home/>} /> */}
      <Route path='/' exact Component={Home} />
      <Route path='/createPost' exact Component={CreatePost} />
      <Route path='/post/:id' exact Component={Posts} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
