import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import longi_logo from "../images/product_logos/longi_logo.png";
import enphase_logo from "../images/product_logos/enphase_logo.png";
import solaredge_logo from "../images/product_logos/solaredge_logo.png";
import aps_logo from "../images/product_logos/aps_logo.png";
import kinetic_logo from "../images/product_logos/kinetic_logo.png";
import cadsol_logo from "../images/product_logos/cadsol_logo.png";
import schneider_logo from "../images/product_logos/schneider_logo.png";

const ProductCarousel = (props) => {
  // Alice carousel for products
  const handleDragStart = (e) => e.preventDefault();
  const productCarouselItems = [
    <img
      style={{ maxWidth: "60%", maxHeight: props.productCarouselLogoHeight }}
      src={longi_logo}
      onDragStart={handleDragStart}
      alt="longi"
    />,
    <img
      style={{ maxWidth: "60%", maxHeight: props.productCarouselLogoHeight }}
      src={enphase_logo}
      onDragStart={handleDragStart}
      alt="enphase"
    />,
    <img
      style={{ maxWidth: "60%", maxHeight: props.productCarouselLogoHeight }}
      src={solaredge_logo}
      onDragStart={handleDragStart}
      alt="solaredge"
    />,
    <img
      style={{ maxWidth: "60%", maxHeight: props.productCarouselLogoHeight }}
      src={aps_logo}
      onDragStart={handleDragStart}
      alt="aps"
    />,
    <img
      style={{ maxWidth: "60%", maxHeight: props.productCarouselLogoHeight }}
      src={cadsol_logo}
      onDragStart={handleDragStart}
      alt="cadsol"
    />,
    <img
      style={{ maxWidth: "60%", maxHeight: props.productCarouselLogoHeight }}
      src={kinetic_logo}
      onDragStart={handleDragStart}
      alt="kinetic"
    />,
    <img
      style={{ maxWidth: "60%", maxHeight: props.productCarouselLogoHeight }}
      src={schneider_logo}
      onDragStart={handleDragStart}
      alt="schneider"
    />,
  ];

  return (
    <AliceCarousel
      mouseTracking
      autoPlay={true}
      items={productCarouselItems}
      disableButtonsControls={true}
      disableDotsControls={true}
      infinite={true}
      animationDuration={2500}
      responsive={{
        0: { items: 2 },
        550: { items: 3 },
        [`${props.wSmall}`]: { items: 4 },
      }}
    />
  );
};

export default ProductCarousel;
