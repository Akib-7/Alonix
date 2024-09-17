import Home from "./Components/Home";

import Navbar from "./Components/Navbar";
import Marquee from "./Components/Marquee";
import Services from "./Components/Services";
import LocomotiveScroll from "locomotive-scroll";
import Products from "./Components/Products";

import Members from "./Components/Members";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Models from "./Components/Models";
import Loader from "./Components/Loader";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoading = () => {
    setLoading(false);
  };
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      {loading ? (
        <Loader load={handleLoading} />
      ) : (
        <>
          <Navbar />
          <div id="home">
            <Home />
          </div>
          <Marquee />
          <div id="services">
            <Services />
          </div>
          <div id="products">
            <Products />
          </div>
          <Models />
          <div id="members">
            <Members />
          </div>
          <div id="contact">
            <ContactUs />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
