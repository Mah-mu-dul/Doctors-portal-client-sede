import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/home/Home'

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>







    </div>
  );
}

export default App;
