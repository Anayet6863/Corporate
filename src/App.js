import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/serviceses';
import AppTeams from './components/teams';
import AppTestemonilas from './components/testemonials';
import AppPricing from './components/pricing';
import AppBlog from './components/blog';
import AppContact from './components/component';
import AppFooter from './components/footer';
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
          <AppTestemonilas />
          <AppPricing />
          <AppBlog />
          <AppContact />
        </main>
        <footer id='footer'>
          <AppFooter />
        </footer>
    </div>
  );
}

export default App;
