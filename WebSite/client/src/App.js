
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';



function App() {


  return (
    <div className="App">
     <Router>
     <Link to='/createPost'>Add Post</Link>
      <Routes>
      {/* <Route path='/' element={<Home/>} /> */}
      <Route path='/' exact Component={Home} />
      <Route path='/createPost' exact Component={CreatePost} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
