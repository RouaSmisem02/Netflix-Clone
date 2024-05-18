import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Changed BrowserRouter to Router
import FavList from './components/FavList';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <>
    <BrowserRouter>
       <NavbarComponent />
        <Container className="my-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favlist' element={<FavList />} />
          </Routes>
        </Container>
     <Home/> 
      </BrowserRouter>
    </>
  )
}

export default App;
