import Banner from "./components/banner/Banner"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 font-nunito relative overflow-hidden">
      <Navbar/>
      <Banner/>
    </div>
  )
}

export default App