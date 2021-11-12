import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
