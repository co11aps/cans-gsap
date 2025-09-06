import gsap from 'gsap';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <div className="h-dvh border border-red-500"></div>
    </main>
  );
};
export default App;
