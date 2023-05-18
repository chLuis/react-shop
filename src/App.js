import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Navbar, Aside, Header, Main } from './components';

function App() {
  return (
    <>

    <Routes>
      <Route path='/*' element={<Header />}/>
    </Routes>
    <Routes>
      <Route path='/*' element={<Navbar />}/>
    </Routes>
    <Routes>
      <Route path='/' element={<Aside />}/>
    </Routes>
    <Routes>
      <Route path='/' element={<Main />}/>
    </Routes>

    </>
  );
}
//https://pokeapi.co/api/v2/pokemon/
export default App;
