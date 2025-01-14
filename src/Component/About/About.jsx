export default function About() {
  return (
    <div className="bg-[#1ABC9C]">
      <div className="main-container">
        <h1 className="uppercase text-4xl font-bold text-white">
          about component
        </h1>
        <div className="flex items-center space-x-2 mt-2 mb-3">
          <div className="p-0.5 bg-white w-20"></div>
          <i className="fa-solid fa-star text-white" />
          <div className="p-0.5 bg-white w-20"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-white px-12">
          <div>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div>
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
