import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="aspect-[2/1] lg:aspect-[4/3]	 bg-gradient-to-t from-indigo-200 font-nunito relative overflow-hidden">
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
