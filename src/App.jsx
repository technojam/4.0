import LandingAnimation from "./components/LandingAnimation";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
const App = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="min-h-screen dark:text-white text-black dark:bg-transparent bg-transparent">
        {/* <SocialMedia/> */}
        <LandingAnimation/>
      </div>
    </div>
  );
};

export default App;