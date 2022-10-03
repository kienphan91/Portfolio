import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <>
    <div className="h-[50vh] lg:h-screen bg-gradient-to-t from-indigo-200 font-nunito relative overflow-hidden">
      <Navbar />
      <Banner />
    </div>
    <About/>
    <Services/>
    </>
  );
};

export default App;
