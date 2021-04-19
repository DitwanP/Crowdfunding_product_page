import './styles/App.scss';
import Hero from './components/Hero';
import Product from './components/Product';
import BackingInfo from './components/BackingInfo';

function App() {
  return (
    <div className="App">
      <div className="index">
        <Hero />
        <Product />
        <BackingInfo />
      </div>
    </div>
  );
}

export default App;
