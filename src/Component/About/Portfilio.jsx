import image1 from "../../assets/poert1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";

export default function Portfilio() {
  return (
    <div>
      <div className="flex container flex-col items-center justify-center h-screen ">
        <div>
          <h1 className="uppercase text-[#2C3E50] text-4xl font-bold ">
            portfolio component
          </h1>
          <div className="flex items-center space-x-2 mt-3  justify-center">
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
            <i className="fa-solid fa-star text-[#2C3E50]" />
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
          </div>
        </div>
        <div className="grid md:grid-col-2 lg:grid-cols-3 gap-4">
          <div>
            <img src={image1} alt="image 1" className="  rounded-lg" />
          </div>
          <div>
            <img src={image2} alt="image 1" className=" rounded-lg" />
          </div>
          <div>
            <img src={image3} alt="image 1" className=" rounded-lg" />
          </div>
          <div>
            <img src={image1} alt="image 1" className="  rounded-lg" />
          </div>
          <div>
            <img src={image2} alt="image 1" className=" rounded-lg" />
          </div>
          <div>
            <img src={image3} alt="image 1" className=" rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
