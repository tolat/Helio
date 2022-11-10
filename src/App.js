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
import Modal from "./components/GeneralUI/Modal";
import { useState } from "react";

function App() {
  const { width } = useWindowSize();
  const [quoteModalVis, setQuoteModalVis] = useState({
    o: "0",
    v: "hidden",
  });

  const handleToggleQuoteModal = () => {
    setQuoteModalVis(
      quoteModalVis.display == ""
        ? { o: "0", v: "hidden" }
        : { o: "1", v: "visible" }
    );
  };

  return (
    <div className={styles.AppContainer}>
      <Modal viewportWidth={width} modalVis={quoteModalVis} />
      <div className={styles.App}>
        <NavBar handleToggleQuoteModal={handleToggleQuoteModal} />
        <Banner1 viewportWidth={width} />
        <SolarPrograms viewportWidth={width} />
        <SolarSolutions viewportWidth={width} />
        <OurProducts />
        <FAQ viewportWidth={width} />
        <RequestQuoteButton quoteModalVis={quoteModalVis} />
        <Footer viewportWidth={width} />
      </div>
    </div>
  );
}

export default App;
