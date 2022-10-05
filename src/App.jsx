import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
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
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default App;
