
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
import Login from './pages/Login';
import Registration from './pages/Registration';



function App() {


  return (
    <div className="App">
     <Router>
      <div className='navbar'>
     <Link to='/'>Home</Link>
     <Link to='/createPost'>Creat A Post</Link>
     <Link to='/login'>Login</Link>
     <Link to='/registration'>Registration</Link>
      </div>
      <Routes>
      {/* <Route path='/' element={<Home/>} /> */}
      <Route path='/' exact Component={Home} />
      <Route path='/createPost' exact Component={CreatePost} />
      <Route path='/post/:id' exact Component={Posts} />
      <Route path='/login' exact Component={Login} />
      <Route path='/registration' exact Component={Registration} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
