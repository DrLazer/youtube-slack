import Header from "./components/Header";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import Info from "./components/Info";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import DeepDive from "./components/DeepDive";

function App() {
  return (
    <div className="m-auto margin: auto max-w-[1400px]">
      <div className="max-w-7xl">
        <Header />
        <Banner />
        <Slogan />
      </div>
    </div>
    
    
  );
}

export default App;
