import './App.css';
import "@fontsource/fira-code"
import NavBar from './component/NavBar';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import Announce from './pages/Announce';
import About from './pages/About';
import ListDetail from './pages/ListDetail';
import { Link } from 'react-router-dom';
import ListContent from './pages/ListContent';
import IntroPage from './pages/IntroPage';


function App() {
  return (
    <>
        {/* <NavBar /> */}
          <Routes>
            <Route path='/' element={<IntroPage />} />
            <Route path='/Announce' element={<Announce />} />
            <Route path='/about' element={<About />}/>
            <Route path='/List' element={<ListContent />}/>
            <Route path='/List/:id' element={<ListDetail />} />
          </Routes>
    </> 
  );
}

export default App;
