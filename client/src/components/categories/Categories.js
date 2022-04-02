import React from "react";

const Categories = () => {
  const categories = [
    {
      name: "Handicraft",
      colorCode: "#BAE6FD",
    },
    {
      name: "Handlooms",
      colorCode: "#E9D5FF",
    },
    {
      name: "Paintings",
      colorCode: "#E9D5FF",
    },
    {
      name: "Electronics",
      colorCode: "#E9D5FF",
    },
    {
      name: "Kitchen",
      colorCode: "#E9D5FF",
    },
  ];
  return (
    <div className="flex justify-center ">
      {categories.map((item, index) => {
        let rotate = 1;
        rotate *= 50 * index;
        return (
          <div
            className="transition ease-in-out delay-550 p-12 m-4 rounded-lg cursor-pointer flex-auto shadow-md hover:shadow-xl "
            style={{
              background: "rgb(167,243,208)",
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

export default Categories;
