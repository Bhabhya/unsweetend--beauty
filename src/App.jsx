import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Serve from './components/Serve';

function App() {
  

  return (
    <div>

    <BrowserRouter>

    <Navbar></Navbar>

    <Routes>
    
    <Route exact={true} path='/' element={<Landingpage></Landingpage>}></Route>
    <Route exact={true} path='/serve' element={<Serve></Serve>}></Route>
    
    </Routes>

    <Footer></Footer>
      
    </BrowserRouter>

    </div>
  )
}

export default App
