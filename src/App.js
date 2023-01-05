import logo from './logo.svg';
import './App.css';
import Header from './screen/header/Header';
import {Routes,Route} from 'react-router-dom';
import Register from './screen/pages/authenticate/Register';
import Login from './screen/pages/authenticate/Login';
import Home from './screen/pages/Home';
import Footer from './screen/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}></Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
      </>
  );
}

export default App;
