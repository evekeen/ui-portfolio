import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { ZumbachDemo } from './components/sections/ZumbachDemo';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Projects />
      <Experience />
      <ZumbachDemo />
      <Footer />
    </div>
  );
}

export default App;
