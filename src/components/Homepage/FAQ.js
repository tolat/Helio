import CentralSection from "../GeneralUI/CentralSection";
import QnaCard from "../GeneralUI/QnaCard";
import CentralTile from "../GeneralUI/CentralTile";
import { selectSML } from "../../utils";

const FAQ = (props) => {
  const w = props.viewportWidth;
  const templateCols = selectSML(w, "100%", "50% 50%", "50% 50%");

  return (
    <CentralSection style={{ flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          fontSize: "2rem",
          textAlign: "center",
        }}>
        FAQ
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: templateCols,
          justifyContent: "center",
          width: "100%",
          overflow: "scroll",
          msOverflowStyle: "none" /* for Internet Explorer, Edge */,
          scrollbarWidth: "none" /* for Firefox */,
          overflowY: "scroll",
          borderBottom: "1px solid grey",
          paddingBottom: "4rem",
        }}>
        {[
          {
            key: "faq1",
            q: "Is it sunny enough in Vancouver and BC generally for solar to be worth it?",
            a: "Yes! It is a common misconception that British Columbia is too rainy or overcast for solar, specificallt Vancouver and Victoria. In fact, BC receives the same amount of energy from the sun as Germany, a global leader in solar energy.",
          },
          {
            key: "faq2",
            q: "How much does a typical system cost, and how long will it take to pay itself off?",
            a: "In BC, the average cost of a solar ystem to offset the yearly energy usage of a home is $20,000 to $30,000 (not including battery backup). The payback period is very dependent on site conditions, shading, roof angle, and region, but is typially between 10-15 years.",
          },
          {
            key: "faq3",
            q: "What are the product warranties and who will be around in 10 years to replace equipment if it malfuncitons?",
            a: "We choose inverters and solar panels that come with a 25-year manufacturer warranty, and the brands we use are among the largest solar companies globally, giving you the most assurance that they will exists down the road if equipment fails. Additionally, all of our work is backed by a 5-year workmanship warranty.",
          },
          {
            key: "faq4",
            q: "How long will it take to install solar on my home?",
            a: "Despite the actual installation of solar panels taking only 2-4 days typically, solar project have a timeline of 3-12 weeks (depending on regional permitting requirements). The majority of delays come from waiting for a building permit if one is required. This can take anywhere from a week to 8 weeks depending on the municipality. Will will make sure we give you a realistic timeline based on your region's permit requirements.",
          },
        ].map((item) => (
          <CentralTile key={item.key}>
            <QnaCard question={item.q} answer={item.a} />
          </CentralTile>
        ))}
      </div>
    </CentralSection>
  );
};

export default FAQ;
