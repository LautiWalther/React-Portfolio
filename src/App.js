import './App.css';
import ListProjects from './components/ListProjects';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import Login from './pages/Admin';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import { AuthProvider } from './components/auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<ListProjects/>} />
            <Route exact path="/contact" element={<ListProjects/>} />
            <Route exact path="/posts" element={<ListProjects/>} />
            <Route path="/post/:postId" element={<Post/>} />
            <Route exact path="/admin" element={<Login />} />
          </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
