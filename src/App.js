import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import { useState } from 'react';
function App() {
  //var
  const [input,setInput]=useState();
  return (
    <div>
      <Navbar />
      <Home/>
      <Skills/>
      <Projects/>
      <Contacts />
    </div>
  );
}
export default App;
