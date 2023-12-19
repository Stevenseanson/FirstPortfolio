import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/Main';
import Contact from './components/Contact';

function App() {
  return (
 <Routes basename={process.env.PUBLIC_URL}>
  <Route path="/" element={<Layout />} >
  
    <Route index element={<MainPage/>} />
    <Route path="contact" element={<Contact />} />
  </Route>
 </Routes>
  );
}

export default App;
