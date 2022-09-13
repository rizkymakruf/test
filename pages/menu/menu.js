import React, { memo } from "react";

const Menu = () => {
  const [list, setList] = React.useState("seasional");

  const onClick = React.useCallback(
    (l) => () => {
      setList(l);
    },
    [list]
  );
  return (
    <>
      <div className="bg-gray-100 w-full h-auto">
        <div className="w-full bg-white pt-4 pb-2 text-lg font-bold flex justify-center">
          Menu
        </div>
        <div className="w-full bg-white pt-4 pb-2 flex justify-around">
          <button
            onClick={onClick("seasional")}
            className={`${
              list === "seasional" ? "text-black" : "text-gray-400"
            }`}
          >
            Seasonal Product
          </button>
          <button
            onClick={onClick("best")}
            className={`${list === "best" ? "text-black" : "text-gray-400"}`}
          >
            Best Seller
          </button>
          <button
            onClick={onClick("coffee")}
            className={`${list === "coffee" ? "text-black" : "text-gray-400"}`}
          >
            Coffee
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Menu);
