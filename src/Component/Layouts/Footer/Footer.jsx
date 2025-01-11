export default function Footer() {
  return (
    <footer>
      <div className="bg-[#2C3E50] text-white text-center p-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 md:gap-0">
            <div className="p-4">
              <h2 className="uppercase font-medium text-3xl">Location</h2>
              <p className="my-4">2215 John Daniel Drive</p>
              <span>Clark, MO 65243</span>
            </div>
            <div className="p-4">
              <h2 className="uppercase font-medium text-3xl">AROUND THE WEB</h2>
              <ul className="flex gap-5 justify-center mt-5">
                <li>
                  <a
                    href="www.facebook.com"
                    className="border-2 p-1 border-white rounded-full"
                  >
                    <i className="fa-brands fa-facebook text-base" />
                  </a>
                </li>
                <li>
                  <a
                    href="www.twitter.com"
                    className="border-2 p-1 border-white rounded-full"
                  >
                    <i className="fa-brands fa-twitter  text-base" />
                  </a>
                </li>
                <li>
                  <a
                    href="www.linkedin.com"
                    className="border-2 p-1 border-white rounded-full"
                  >
                    <i className="fa-brands fa-linkedin-in  text-base" />
                  </a>
                </li>
                <li>
                  <a
                    href="www.facebook.com"
                    className="border-2 p-1 border-white rounded-full"
                  >
                    <i className="fa-solid fa-globe  text-base" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-4">
              <h2 className="uppercase font-medium text-3xl">
                ABOUT FREELANCER
              </h2>
              <p className="my-2">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A252F] p-3">
        <div className="container text-center text-white p-3">
          <p>Copyright © Your Website 2025</p>
        </div>
      </div>
    </footer>
  );
}
