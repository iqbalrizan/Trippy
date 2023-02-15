
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import HomePage from './Pages/HomePage';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/-about" element={<About />} />
      <Route path="/-services" element={<Services />} />
      <Route path="/-contacts" element={<Contacts />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
