import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm'
import NoteApp from './components/NoteApp'

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/noteapp">Note App</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='signup' element={<SignUpForm/>} />
          <Route path='noteapp' element={<NoteApp/>}/>
        </Routes>

      </div>
    </>
  );
}

export default App;