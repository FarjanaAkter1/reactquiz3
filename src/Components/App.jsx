import { Nav } from '../Nav';

import '../App.css';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/home' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
