import './App.css';
import ListProjects from './components/ListProjects';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import Login from './pages/Admin';
import Profile from './pages/Profile';
import RequireAuth from './components/RequireAuth';
import RequireNotAuth from './components/RequireNotAuth';
import Logout from './pages/Logout';

import M from 'materialize-css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import { AuthProvider} from './components/auth';
import Posts from './pages/Posts';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<ListProjects/>} />
            <Route exact path="/contact" element={<ListProjects/>} />
            <Route exact path="/posts" element={<Posts />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route exact path="/admin" element={<RequireNotAuth><Login /></RequireNotAuth>} />
            <Route exact path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route exact path="/logout" element={<RequireAuth><Logout /></RequireAuth>}/>
          </Routes>
          <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
