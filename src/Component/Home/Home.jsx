import img from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <div className="bg-[#1ABC9C]">
      <div className="main-container">
        <img src={img} className="w-60 " alt="avater Image" />
        <h1 className="uppercase text-white font-bold text-4xl pt-3">
          start framework
        </h1>
        <div className="flex items-center space-x-2 mt-2 mb-3">
          <div className="p-0.5 bg-white w-20"></div>
          <i className="fa-solid fa-star text-white" />
          <div className="p-0.5 bg-white w-20"></div>
        </div>
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
}
