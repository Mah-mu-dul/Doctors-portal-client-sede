import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home'
import { FaCapsules } from 'react-icons/fa';
import About from './pages/About/About';
import Appinment from './pages/Appoinment/Appinment';
import Reviews from './pages/Reviews/Reviews';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Header from './pages/share/Header/Header';
import Footer from './pages/share/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appinment></Appinment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

      <Footer></Footer>







    </div>
  );
}

export default App;
