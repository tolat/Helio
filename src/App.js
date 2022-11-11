import styles from "./App.module.css";
import NavBar from "./components/Misc/Nav/NavBar";
import Banner1 from "./components/Homepage/Banner1";
import SolarPrograms from "./components/Homepage/SolarPrograms";
import SolarSolutions from "./components/Homepage/SolarSolutions";
import OurProducts from "./components/Homepage/OurProducts";
import FAQ from "./components/Homepage/FAQ";
import RequestQuoteButton from "./components/Homepage/RequestQuoteButton";
import Footer from "./components/Misc/Footer";
import { useWindowSize } from "usehooks-ts";
import FreeQuoteModal from "./components/Misc/FreeQuoteModal";
import { useState } from "react";
import { selectTSML } from "./utils";
import ContactModal from "./components/Misc/ContactModal";

function App() {
  const { width } = useWindowSize();
  const appZoom = selectTSML(width, "0.6", "0.8", "1", "1");
  const [quoteModalVis, setQuoteModalVis] = useState({ o: "0", v: "hidden" });
  const [contactModalVis, setContactModalVis] = useState({
    o: "0",
    v: "hidden",
  });

  return (
    <div className={`${styles.AppContainer} noscroll`}>
      <FreeQuoteModal
        viewportWidth={width}
        modalVis={quoteModalVis}
        setModalVis={setQuoteModalVis}
      />
      <ContactModal
        viewportWidth={width}
        modalVis={contactModalVis}
        setModalVis={setContactModalVis}
      />
      <div className={styles.App} style={{ zoom: appZoom }}>
        <NavBar
          viewportWidth={width}
          setQuoteModalVis={setQuoteModalVis}
          setContactModalVis={setContactModalVis}
        />
        <Banner1 viewportWidth={width} />
        <SolarPrograms viewportWidth={width} />
        <SolarSolutions viewportWidth={width} />
        <OurProducts />
        <FAQ viewportWidth={width} />
        <RequestQuoteButton setModalVis={setQuoteModalVis} />
        <Footer viewportWidth={width} />
      </div>
    </div>
  );
}

export default App;
