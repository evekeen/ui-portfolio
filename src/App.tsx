import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { ZumbachDemo } from './components/sections/ZumbachDemo';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Projects />
      <ZumbachDemo />
      <Footer />
    </div>
  );
}

export default App;
