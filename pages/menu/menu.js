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
              list === "seasional"
                ? "text-black underline font-bold"
                : "text-gray-400"
            }`}
          >
            Seasonal Product
          </button>
          <button
            onClick={onClick("best")}
            className={`${
              list === "best"
                ? "text-black underline font-bold"
                : "text-gray-400"
            }`}
          >
            Best Seller
          </button>
          <button
            onClick={onClick("coffee")}
            className={`${
              list === "coffee"
                ? "text-black underline font-bold"
                : "text-gray-400"
            }`}
          >
            Coffee
          </button>
        </div>
        {list == "seasional" ? (
          <div className="w-full flex flex-col space-y-2 my-2 bg-white p-2">
            <p>Seasonal Products</p>
            <div className="w-full flex items-center gap-3">
              <div className="">
                <div className="w-20 h-20 bg-gray-400 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-sm font-semibold text-black">
                  Raisin Delisght Frappee
                </p>
                <p className="text-gray-400 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">50.000</div>
            </div>
            <div className="w-full flex items-center gap-3">
              <div className="">
                <div className="w-20 h-20 bg-gray-400 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-sm font-semibold text-black">
                  Raisin Delisght Frappee
                </p>
                <p className="text-gray-400 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">50.000</div>
            </div>
            <div className="w-full flex items-center gap-3">
              <div className="">
                <div className="w-20 h-20 bg-gray-400 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-sm font-semibold text-black">
                  Raisin Delisght Frappee
                </p>
                <p className="text-gray-400 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">50.000</div>
            </div>
          </div>
        ) : list === "best" ? (
          <div className="w-full flex flex-col space-y-2 my-2 bg-white p-2">
            <p>Best Products</p>
            <div className="w-full flex items-center gap-3">
              <div className="">
                <div className="w-20 h-20 bg-red-300 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-sm font-semibold text-black">Best Coffee</p>
                <p className="text-gray-400 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">80.000</div>
            </div>
            <div className="w-full flex items-center gap-3">
              <div className="">
                <div className="w-20 h-20 bg-red-300 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-sm font-semibold text-black">Best Coffee</p>
                <p className="text-gray-400 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">80.000</div>
            </div>
            <div className="w-full flex items-center gap-3">
              <div className="">
                <div className="w-20 h-20 bg-red-300 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-sm font-semibold text-black">Best Coffee</p>
                <p className="text-gray-400 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">80.000</div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col space-y-2 my-2 bg-white p-2">
            <p>Coffee</p>
            <div className="w-full flex items-center gap-3">
              <div className="">
                <div className="w-20 h-20 bg-orange-900/50 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-sm font-semibold text-black">
                  Coffee robusta
                </p>
                <p className="text-gray-400 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">30.000</div>
            </div>
            <div className="w-full flex items-center gap-3">
              <div className="">
                <div className="w-20 h-20 bg-orange-900/50 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-sm font-semibold text-black">
                  Coffee robusta
                </p>
                <p className="text-gray-400 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">30.000</div>
            </div>
            <div className="w-full flex items-center gap-3">
              <div className="">
                <div className="w-20 h-20 bg-orange-900/50 rounded-lg"></div>
              </div>
              <div className="w-3/6 flex flex-col">
                <p className="text-sm font-semibold text-black">
                  Coffee robusta
                </p>
                <p className="text-gray-400 text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="w-1/6">30.000</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Menu);
