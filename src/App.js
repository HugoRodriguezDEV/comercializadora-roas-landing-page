import Header from './components/Header';
import Hero from './components/Hero';
import ValorROAS from './components/ValorROAS';
import Especialidades from './components/Especialidades';
import Servicios from './components/Servicios';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <ValorROAS />
        <Especialidades />
        <Servicios />
      </main>
      <Footer />
    </div>
  );
}

export default App;
