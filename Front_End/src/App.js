import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/login';
import SignUp from './components/signUp';
import Home from './components/homePortal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/home/*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
