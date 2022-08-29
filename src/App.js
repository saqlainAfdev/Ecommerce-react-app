
import './assets/scss/custom.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Brand from './components/Brand';
import Login from './components/Login';
import Bread from './components/Bread';

function App() {
  return (
    <div className="my-app">
      <Header />
      <Bread />
      <Login />
      <Brand />

      <Footer />
    </div>

  );
}

export default App;
