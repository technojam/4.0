import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className=" text-white bg-gray-900 grid lg:grid-cols-2 gap-6 px-20 py-14 sm:px-8">
        {/* Logo and map */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/*logo*/}
            <img className="w-[70px] pt-5" src="/TechnoJam.png" alt="" />
          {/*Map*/}
          <div>
            <h4 className="mb-4 font-bold text-[#daa520]">VENUE</h4>
            <iframe
              width="150"
              height="100"
              src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=galgotias%20University,%20Greater%20Noida%20,Sector%2017A,%20203201+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
            <h2 className="mt-4 text-[#daa520] font-bold">April 2024</h2>
            <p className="">Galgotias University, Greater Noida</p>
          </div>
        </div>
        {/*Other List Items */}
        <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="col">
            <h4 className="font-bold text-[#daa520]">Resources</h4>
            <ul>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                <a href="#">Sponsorship Brochure</a>
              </li>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                <a href="#">Code Of Conduct</a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4 className="font-bold text-[#daa520]">COMMUNITY</h4>
            <ul>
              <li className="flex gap-2 items-center hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                Github
                <a href="https://discord.gg/d3VZen7c" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li className="flex gap-2 items-center hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                Discord
                <a href="https://discord.gg/d3VZen7c" target="_blank">
                  <FaDiscord />
                </a>
              </li>

              <li className="flex gap-2 items-center hover:pl-3 transition-all duration-150 ease-in-out text-gray-400 cursor-pointer hover:text-[#daa520]">
                Telegram
                <a href="https://discord.gg/d3VZen7c" target="_blank">
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h1 className="font-bold text-[#daa520]">Social Connection</h1>
            <p>Learn. Teach. Hack. Win</p>
            <ul className="flex gap-3 py-4 ">
              <li className="hover:scale-110  duration-150 text-2xl text-[#daa520]">
                <a
                  href="https://www.linkedin.com/company/technojam/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="hover:scale-110 duration-150 text-2xl text-[#daa520]">
                <a
                  href="https://www.facebook.com/teamtechnojam"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="hover:scale-110 duration-150 text-2xl text-[#daa520]">
                <a
                  href="https://www.instagram.com/teamtechnojam/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="hover:scale-110 duration-150 text-2xl text-[#daa520]">
                <a href="https://twitter.com/technojam_gu" target="_blank">
                  <FaTwitter />
                </a>
              </li>
              <li className="hover:scale-110 duration-150 text-2xl text-[#daa520]">
                <a href="https://discord.gg/d3VZen7c" target="_blank">
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4 className="font-bold text-[#daa520]">Archives</h4>
            <ul>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                hackCBS 2.0
              </li>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                hackCBS 3.0
              </li>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                hackCBS 4.0
              </li>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                hackCBS 5.0
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="
      text-center pt-2 text-gray-400 text-sm pb-8 bg-gray-900"
      >
        <span>Made with ❤️ by Team Technojam</span>
      </div>
    </>
  );
};

export default Footer;
