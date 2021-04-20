import './styles/App.scss';
import Hero from './components/Hero';
import Product from './components/Product';
import BackingInfo from './components/BackingInfo';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <div className="index">
        <Hero />
        <div className="main-content">
          <Product />
          <BackingInfo />
          <AboutSection />
        </div>
      </div>
    </div>
  );
}

export default App;
