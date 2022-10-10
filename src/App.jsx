import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import { useState } from "react";

const App = () => {

  const [btnDark, setBtnDark] = useState(true);

  let checkClass = btnDark ? "" : "dark";

  function handleDark() {
    setBtnDark((btnDark) => !btnDark);
  }

  return (
    <div id="body" className={`${checkClass} last:font-nunito`}>
      <div className="h-[50vh] lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        <Navbar darkHandler = {handleDark}/>
        <Banner />
      </div>
      <About/>
      <Services/> 
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
