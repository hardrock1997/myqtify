import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GridOfCards from './components/GridOfCards';

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero heroText='100 Thousand Songs,ad-free Over thousands podcast episodes'/>
      <GridOfCards/>
      {/* <Card numberOfFollowers='100M Follows' title='New Bollywood'/> */}
    </div>
  );
}

export default App;
