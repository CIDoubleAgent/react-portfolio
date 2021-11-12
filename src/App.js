import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <header className="App-header">
        <p>
          Hello World!
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
