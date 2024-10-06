import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/serviceses';
import AppTeams from './components/teams';
// import Button from 'react-bootstrap/Button';
import Appworks from './components/Works';
function App() {
  return (
    <div className="App">
       {/* <Button variant="primary">Primary</Button>
     <Button variant="secondary">Secondary</Button> */}


        <header id="header">
        <AppHeader />
        </header>
        <main>
          <AppHero />
          <AppAbout />
          <AppServices/>
          <Appworks />
          <AppTeams/>
        </main>
    </div>
  );
}

export default App;
