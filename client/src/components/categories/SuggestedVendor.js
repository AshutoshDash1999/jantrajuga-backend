import React from "react";

const SuggestedVendor = () => {
  const categories = [
    {
      name: "VendorA",
      colorCode: "#BAE6FD",
    },
    {
      name: "VendorB",
      colorCode: "#E9D5FF",
    },
    {
      name: "VendorC",
      colorCode: "#E9D5FF",
    },
    {
      name: "VendorD",
      colorCode: "#E9D5FF",
    },
    {
      name: "VendorE",
      colorCode: "#E9D5FF",
    },
  ];
  return (
    <div className="flex justify-center ">
      {categories.map((item, index) => {
        let rotate = 1;
        rotate *= 75 * index;
        return (
          <div
            className="transition ease-in-out delay-550 p-12 m-4 rounded-lg cursor-pointer flex-auto shadow-md hover:shadow-xl"
            style={{
              background: "rgb(221, 214, 254)",
              filter: `hue-rotate(${rotate}deg)`,
            }}
          >
            <h2 className="text-2xl font-bold text-gray-700">{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedVendor;
