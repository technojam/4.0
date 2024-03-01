import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="relative overflow-hidden font-Phudu">
      <Navbar />
      <Hero/>
      <div className="min-h-screen dark:bg-[#0C0D0E] dark:text-white text-black bg-white"></div>
    </div>
  );
};

export default App;