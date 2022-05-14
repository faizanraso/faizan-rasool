import React from 'react';
import Introduction from './components/About';
import About from './components/Introduction';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <About/>
      <Introduction/>
      <Experiences/>
      <Projects/>
    </div>
  );
}

export default App;
