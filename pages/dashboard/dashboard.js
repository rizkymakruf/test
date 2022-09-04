import { memo } from "react";
import Card from "../../components/cards/card";
import Navbar from "../../components/layout/navbar";
import Navigasi from "../../components/layout/navigasi";
import EmblaCarousel from "../../components/slider/embla";

const Dashboard = () => {
  return (
    <>
      <div className="bg-gray-100 w-full h-screen">
        <Navbar />
        <Card />
        <EmblaCarousel />
        <Navigasi />
      </div>
    </>
  );
};

export default memo(Dashboard);
