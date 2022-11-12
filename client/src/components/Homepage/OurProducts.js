import CentralSection from "../GeneralUI/CentralSection";
import ProductCarousel from "./ProductCarousel";

const OurProducts = (props) => {
  return (
    <CentralSection
      style={{ flexDirection: "column", borderBottom: "1px solid grey" }}>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "2.5rem",
          marginTop: "3rem",
        }}>
        Our <b>Products</b>
      </div>
      <div style={{ margin: "4rem 0rem 5rem 0rem" }}>
        <ProductCarousel />
      </div>
    </CentralSection>
  );
};

export default OurProducts;
