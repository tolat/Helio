import styles from "./App.module.css";
import NavBar from "./components/Nav/NavBar";
import Banner1 from "./components/Homepage/Banner1";
import SolarPrograms from "./components/Homepage/SolarPrograms";
import SolarSolutions from "./components/Homepage/SolarSolutions";
import OurProducts from "./components/Homepage/OurProducts";
import FAQ from "./components/Homepage/FAQ";
import RequestQuoteButton from "./components/Homepage/RequestQuoteButton";
import Footer from "./components/Footer";
import { useWindowSize } from "usehooks-ts";

function App() {
  const { width } = useWindowSize();

  return (
    <div className={styles.App}>
      <NavBar />
      <Banner1 viewportWidth={width} />
      <SolarPrograms viewportWidth={width} />
      <SolarSolutions viewportWidth={width} />
      <OurProducts />
      <FAQ viewportWidth={width} />
      <RequestQuoteButton />
      <Footer viewportWidth={width} />
    </div>
  );
}

export default App;
