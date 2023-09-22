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


function App() {
  return (
    <Container>
      <Link to='/' className="logo">sitesakamoto</Link>
      <div className="inner">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Announce />} />
            <Route path='/about' element={<About />}/>
            <Route path='/List' element={<ListContent />}/>
            <Route path='/List/:id' element={<ListDetail />} />
          </Routes>
        </div>
      </div>
    </Container> 
  );
}

export default App;
