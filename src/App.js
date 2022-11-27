import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PostDetail from './components/postDetail/PostDetail';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/user/:id' element={ <PostDetail />} />
        </Routes>
    </Router>
  );
}

export default App;
