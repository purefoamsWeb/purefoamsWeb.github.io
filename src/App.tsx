import "./css/App.css";
import "./css/index.css";
import NyanCat from "./components/NyanCat";
import Topnav from "./components/TopNav";
import RecentProducts from "./components/RecentProducts";
import AboutUs from "./components/AboutUs";
import Slider from "./components/Slider";


function App() {
  return (
    <div className="wrapper-html">
      <Topnav />
      <AboutUs />
      <RecentProducts />
      <Slider />
      <NyanCat />
    </div>
  );
}


export default App;
