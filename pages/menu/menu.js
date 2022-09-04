import { memo } from "react";
import Navigasi from "../../components/layout/navigasi";

const Menu = () => {
  return (
    <>
      <div className="bg-gray-100 w-full h-auto">
        <div className="w-full bg-white pt-4 pb-2 text-lg font-bold flex justify-center">
          Menu
        </div>
        <div className="w-full bg-white py-2 flex justify-around">
          <button>Seasonal Product</button>
          <button>Best Seller</button>
          <button>Coffee</button>
        </div>
        <Navigasi />
      </div>
    </>
  );
};

export default memo(Menu);
