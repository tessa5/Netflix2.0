
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/Auth';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
