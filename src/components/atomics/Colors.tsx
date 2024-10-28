import React from "react";

interface IColorLibrary {
  name: string;
  colors: IColor[];
}

interface IColor {
  value: string;
  color: string;
}

export default function Colors() {
  const colorLibraries: IColorLibrary[] = [
    {
      name: "DarkMyt",
      colors: [
        { value: "25", color: "bg-darkMyt-25" },
        { value: "50", color: "bg-darkMyt-50" },
        { value: "75", color: "bg-darkMyt-75" },
        { value: "100", color: "bg-darkMyt-100" },
      ],
    },
    {
      name: "LightMyt",
      colors: [
        { value: "25", color: "bg-lightMyt-25" },
        { value: "50", color: "bg-lightMyt-50" },
        { value: "75", color: "bg-lightMyt-75" },
        { value: "100", color: "bg-lightMyt-100" },
      ],
    },
    {
      name: "BaseMyt",
      colors: [
        { value: "red", color: "bg-baseMyt-red" },
        { value: "yellow", color: "bg-baseMyt-yellow" },
        { value: "blue", color: "bg-baseMyt-blue" },
        { value: "green", color: "bg-baseMyt-green" },
        { value: "orange", color: "bg-baseMyt-orange" },
        { value: "purple", color: "bg-baseMyt-purple" },
        { value: "cyan", color: "bg-baseMyt-cyan" },
      ],
    },
    {
      name: "BrightMyt",
      colors: [
        { value: "red", color: "bg-brightMyt-red" },
        { value: "yellow", color: "bg-brightMyt-yellow" },
        { value: "blue", color: "bg-brightMyt-blue" },
        { value: "green", color: "bg-brightMyt-green" },
        { value: "orange", color: "bg-brightMyt-orange" },
        { value: "purple", color: "bg-brightMyt-purple" },
        { value: "cyan", color: "bg-brightMyt-cyan" },
      ],
    },
    {
      name: "NatureMyt",
      colors: [
        { value: "red", color: "bg-natureMyt-red" },
        { value: "yellow", color: "bg-natureMyt-yellow" },
        { value: "blue", color: "bg-natureMyt-blue" },
        { value: "green", color: "bg-natureMyt-green" },
        { value: "orange", color: "bg-natureMyt-orange" },
        { value: "purple", color: "bg-natureMyt-purple" },
        { value: "cyan", color: "bg-natureMyt-cyan" },
      ],
    },
    {
      name: "FutureMyt",
      colors: [
        { value: "red", color: "bg-futureMyt-red" },
        { value: "yellow", color: "bg-futureMyt-yellow" },
        { value: "blue", color: "bg-futureMyt-blue" },
        { value: "green", color: "bg-futureMyt-green" },
        { value: "orange", color: "bg-futureMyt-orange" },
        { value: "purple", color: "bg-futureMyt-purple" },
        { value: "cyan", color: "bg-futureMyt-cyan" },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">Colors</h1>
      <div className="flex flex-row flex-wrap h-full items-start gap-4 p-4 rounded-md">
        <div className="flex flex-wrap">
          {colorLibraries.map((colorBar, index) => (
            <Colorbar key={index} color={colorBar} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Colorbar({ color }: { color: IColorLibrary }) {
  return (
    <div className="flex flex-col text-lightMyt-25 min-w-fit mr-4">
      <span className="text-left  pl-1 mb-2">{color.name}</span>
      <div className="flex flex-row ">
        {color.colors.map((color, index) => (
          <div>
            <div key={index} className={`w-12 h-12 ${color.color}`}></div>
            <div className="flex justify-center w-12">{color.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
