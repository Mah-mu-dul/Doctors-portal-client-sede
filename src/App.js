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
import Signup from './pages/Signup/Signup';
import Requreauth from './pages/Login/Requreauth';

function App() {
  return (
    <div className='max-w-7xl	 mx-auto'>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Requreauth><Appinment></Appinment></Requreauth>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>








    </div>
  );
}

export default App;
