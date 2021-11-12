import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
