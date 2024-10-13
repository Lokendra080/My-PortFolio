
import './App.css';

import About from '../src/Component/About'
import Exprince from '../src/Component/Exprince'
import Skills from '../src/Component/Skills'
import Education from '../src/Component/Education'
import Contect from '../src/Component/Contect'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import Main from '../src/Component/Main';
import UserQuery from './UserQuery';


function App() {
  return (


    <>
    <NavBar />
    
    <Routes>

      <Route path='/' element={<Main/>} />
      <Route path='/About' element={<About />} />
      <Route path='/Exprince' element={<Exprince />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Education' element={<Education />} />
      <Route path='/Contect' element={<Contect />} />
      <Route path='/UserQuery' element={ <UserQuery /> } />
    </Routes>
    </>

  );
}

export default App;
