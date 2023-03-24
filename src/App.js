import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route } from 'react-router-dom';
import { UserProvider } from './Contexts/Auth0.context';
import Header from './Components/header/Header';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Header />

      {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Favourites />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes> */}

      </UserProvider>
    </div>
  );
}

export default App;
