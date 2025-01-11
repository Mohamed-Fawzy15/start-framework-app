export default function Contact() {
  return (
    <div>
      <div className="flex container flex-col items-center justify-center h-screen gap-40 ">
        <div>
          <h1 className="uppercase text-[#2C3E50] text-4xl font-bold ">
            contact section
          </h1>
          <div className="flex items-center space-x-2 mt-3  justify-center">
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
            <i className="fa-solid fa-star text-[#2C3E50]" />
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
          </div>
        </div>

        <form className="w-3/5 flex flex-col gap-5">
          <input
            type="text"
            placeholder="User Name"
            className="w-full border-b-2 border-gray-300 py-4 rounded"
          />
          <input
            type="number"
            placeholder="User Age"
            className="w-full border-b-2 border-gray-300 py-4 rounded"
          />
          <input
            type="email"
            placeholder="User Email"
            className="w-full border-b-2 border-gray-300 py-4 rounded"
          />
          <input
            type="password"
            placeholder="User Password"
            className="w-full border-b-2 border-gray-300 py-4 rounded"
          />
          <button className="bg-[#1abc9c] mt-5 p-2 rounded-lg text-white w-32 ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
