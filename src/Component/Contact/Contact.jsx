export default function Contact() {
  return (
    <div>
      <div className="flex container flex-col items-center justify-center h-screen gap-10 max-w pt-20 ">
        <header>
          <h1 className="uppercase text-[#2C3E50] text-4xl font-bold ">
            contact section
          </h1>
          <div className="flex items-center space-x-2 mt-3  justify-center">
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
            <i className="fa-solid fa-star text-[#2C3E50]" />
            <div className="p-0.5 bg-[#2C3E50] w-20"></div>
          </div>
        </header>

        <form className="w-3/5 flex flex-col gap-5">
          <div className="relative">
            <input
              id="username"
              type="text"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 py-4 rounded outline-none focus:border-[#1abc9c]"
            />
            <label htmlFor="username" className="input-label">
              User Name
            </label>
          </div>

          <div className="relative">
            <input
              type="number"
              id="userAge"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 py-4 rounded outline-none focus:border-[#1abc9c]"
            />
            <label htmlFor="userAge" className="input-label">
              userAge
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="userEmail"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 py-4 rounded outline-none focus:border-[#1abc9c]"
            />
            <label htmlFor="userEmail" className="input-label">
              userEmail
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="userPassword"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-300 py-4 rounded outline-none focus:border-[#1abc9c]"
            />
            <label htmlFor="userPassword" className="input-label">
              userPassword
            </label>
          </div>
          <button className="bg-[#1abc9c] mt-5 p-2 rounded-lg text-white  w-32 ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
