import image1 from "../../assets/poert1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";

export default function Portfilio() {
  return (
    <div>
      <div className="flex container flex-col items-center justify-center max-w p-10 md:p-24 ">
        <div className="my-4 pt-10 md:pt-0">
          <h1 className="uppercase text-[#2C3E50] text-2xl sm:text-4xl font-bold ">
            portfolio component
          </h1>
          <div className="flex items-center space-x-2 mt-3  justify-center">
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
            <i className="fa-solid fa-star text-[#2C3E50]" />
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="group/images relative rounded-lg overflow-hidden">
            <img src={image1} alt="image 1" className="rounded-lg " />
            <div className="group/edit invisible group-hover/images:visible bg-[#1abc9ce6] absolute inset-0 flex justify-center items-center ease-in-out duration-300 transition ">
              <i className="fa-solid fa-plus text-white text-8xl " />
            </div>
          </div>
          <div className="group/images relative rounded-lg overflow-hidden">
            <img src={image2} alt="image 1" className="rounded-lg" />
            <div className="group/edit invisible group-hover/images:visible bg-[#1abc9ce6] absolute inset-0 flex justify-center items-center ease-in-out duration-300 transition ">
              <i className="fa-solid fa-plus text-white text-8xl " />
            </div>
          </div>
          <div className="group/images relative rounded-lg overflow-hidden">
            <img src={image3} alt="image 1" className="rounded-lg" />
            <div className="group/edit invisible group-hover/images:visible bg-[#1abc9ce6] absolute inset-0 flex justify-center items-center ease-in-out duration-300 transition ">
              <i className="fa-solid fa-plus text-white text-8xl " />
            </div>
          </div>
          <div className="group/images relative rounded-lg overflow-hidden">
            <img src={image1} alt="image 1" className="rounded-lg" />
            <div className="group/edit invisible group-hover/images:visible bg-[#1abc9ce6] absolute inset-0 flex justify-center items-center ease-in-out duration-300 transition ">
              <i className="fa-solid fa-plus text-white text-8xl " />
            </div>
          </div>
          <div className="group/images relative rounded-lg overflow-hidden">
            <img src={image2} alt="image 1" className="rounded-lg" />
            <div className="group/edit invisible group-hover/images:visible bg-[#1abc9ce6] absolute inset-0 flex justify-center items-center ease-in-out duration-300 transition ">
              <i className="fa-solid fa-plus text-white text-8xl " />
            </div>
          </div>
          <div className="group/images relative rounded-lg overflow-hidden">
            <img src={image3} alt="image 1" className="rounded-lg" />
            <div className="group/edit invisible group-hover/images:visible bg-[#1abc9ce6] absolute inset-0 flex justify-center items-center ease-in-out duration-300 transition ">
              <i className="fa-solid fa-plus text-white text-8xl " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
