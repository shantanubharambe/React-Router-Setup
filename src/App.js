import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NotFound from "./Pages/NotFound.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route  path='/' element={<Home/>}  />
         <Route  path='/about' element={<About/>}  />
         <Route  path='/contact' element={<Contact/>}  />
         <Route  path='*' element={<NotFound/>}  />
       </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
