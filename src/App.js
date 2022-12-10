
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/admin';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
  <>
  <div style={{backgroundColor: 'black'}}>
    <Router>
      <Admin />
    {/*}  <Routes>
        <Route path='/' element={<Home/>} />
  </Routes> */}
    </Router>
  </div>
  </>
      
  );
}

export default App;
