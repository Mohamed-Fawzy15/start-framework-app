import { useState } from "react";
import image1 from "../../assets/poert1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";

export default function Portfilio() {
  const [activeImg, setActiveImg] = useState(null);

  const handleImg = (img) => {
    setActiveImg(img);
  };

  const closeModle = () => {
    setActiveImg(null);
  };

  const images = [
    {
      id: 1,
      url: image1,
    },
    {
      id: 2,
      url: image2,
    },
    {
      id: 3,
      url: image3,
    },
    {
      id: 4,
      url: image1,
    },
    {
      id: 5,
      url: image2,
    },
    {
      id: 6,
      url: image3,
    },
  ];
  return (
    <>
      <div className="flex container flex-col items-center justify-center max-w p-10 md:p-24 ">
        {/* header */}
        <header className="my-4 pt-10 md:pt-0">
          <h1 className="uppercase text-[#2C3E50] text-2xl sm:text-4xl font-bold ">
            portfolio component
          </h1>
          <div className="flex items-center space-x-2 mt-3  justify-center">
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
            <i className="fa-solid fa-star text-[#2C3E50]" />
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              className="group/images relative rounded-lg overflow-hidden "
              key={img.id}
              onClick={() => {
                handleImg(img.url);
              }}
            >
              <img
                src={img.url}
                alt={`image ${index + 1}`}
                className="rounded-lg "
              />
              <div className="group/edit portfolio-layer group-hover/images:visible ">
                <i className="fa-solid fa-plus text-white text-8xl " />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* model */}
      {activeImg && (
        <div
          className="bg-sky-700/25 fixed inset-0 flex justify-center items-center z-50"
          onClick={() => {
            closeModle();
          }}
        >
          <img src={activeImg} className="w-1/3 rounded" alt="" />
          <button
            className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2"
            onClick={() => {
              closeModle();
            }}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
