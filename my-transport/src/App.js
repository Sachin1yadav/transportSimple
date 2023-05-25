import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import InvestorPage from "./pages/InvestorPage";
import News from "./pages/News";
import Testimonials from "./pages/Testimonials";
import Vehicles from "./pages/Vehicles";
function App() {
  return (
   
      
      <div className="App">
         <Navbar /> 
      <Home />
      <Vehicles />
      <Testimonials />
      <InvestorPage />
      <News />
      <Footer />
     
      <div className="RelativeButton">
        <div>
          <button className="SchedualButton">Schedule Demo</button>
        </div>
        <div>
        <img className="WhatappLogo" src="https://w7.pngwing.com/pngs/200/700/png-transparent-whatsapp-computer-icons-emoji-whatsapp-grass-emoticon-chat.png" alt="" />

        </div>
      </div>
    </div>
  );
}

export default App;
