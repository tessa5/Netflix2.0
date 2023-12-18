
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/Auth';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        
      </AuthContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
