import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaTelegram,
} from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Footer = () => {
  return (
    <>
      <div className=" text-white bg-gray-900 grid lg:grid-cols-2 
      gap-2 px-20 py-6 sm:px-8">
        {/* Logo and map */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 ">
          {/*logo*/}
            <LazyLoadImage className="w-[70px] pt-5 ml-[70px]" src="/TechnoJam.png" alt="" />
          {/*Map*/}
          <div>
            <h4 className="mb-4 font-bold text-[#daa520] border-b-2 border-[#daa520] w-8">VENUE</h4>
            <iframe
              width="200"
              height="150"
              src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=galgotias%20University,%20Greater%20Noida%20,Sector%2017A,%20203201+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
            <h2 className="mt-4 text-[#daa520] font-bold">April 2024</h2>
            <p className="">Galgotias University, Greater Noida</p>
          </div>
        </div>

        {/*Other List Items */}
        <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-2">
          <div className="col">


            <h4 className="font-bold text-[#daa520]">Resources</h4>
            <div className=" w-14 bg-[#daa520] h-[1.5px] mb-2"></div>


            <ul>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520] ">
                <a href="#">Sponsorship Brochure</a>
              </li>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                <a href="#">Code Of Conduct</a>
              </li>
            </ul>
          </div>

          <div className="col">

{/* <<<<<<< HEAD */}
            <h4 className="font-bold text-[#daa520] ">COMMUNITY</h4>
            <div className=" w-14 bg-[#daa520] h-[1.5px] mb-2"></div>

            <ul>
              <li className="flex gap-2 items-center hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                Github
                <a href="https://github.com/technojam" target="_blank">
                  <FaGithub className="cursor-pointer hover:scale-125  duration-150" />
                </a>
              </li>
              <li className="flex gap-2 items-center hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                Discord
                <a href="https://discord.gg/d3VZen7c" target="_blank">
                  <FaDiscord className="cursor-pointer hover:scale-125  duration-150" />
                </a>
              </li>

              <li className="flex gap-2 items-center hover:pl-3 transition-all duration-150 ease-in-out text-gray-400 cursor-pointer hover:text-[#daa520]">
                Telegram
                <a href="https://discord.gg/d3VZen7c" target="_blank">
                  <FaTelegram className="cursor-pointer hover:scale-125  duration-150" />
                </a>
              </li>
            </ul>
          </div>

          <div className="col">

{/* <<<<<<< HEAD */}
            <h4 className="font-bold text-[#daa520] ">Archives</h4>
            <div className=" w-12 bg-[#daa520] h-[1.5px] mb-2"></div>

            <ul>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
              Dexterix 1.0
              </li>
              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                Dexterix 2.0
              </li>

              <li className="hover:pl-3 transition-all duration-150 ease-linear text-gray-400 cursor-pointer hover:text-[#daa520]">
                Dexterix 3.0
              </li>
              
            </ul>
          </div>

          <div className="col">
{/* <<<<<<< HEAD */}
            <h1 className="font-bold text-[#daa520] ">Social Connection</h1>
            <div className=" w-28 bg-[#daa520] h-[1.5px] mb-2"></div>
            <p className="text-gray-400">Learn. Teach. Hack. Win</p>

            <ul className="flex gap-3 py-4 ">
              <li className="hover:scale-110  duration-150 text-2xl text-[#daa520]">
                <a
                  href="https://www.linkedin.com/company/technojam/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <<<<<<< HEAD */}
              <li className="hover:scale-110 duration-150 text-2xl text-[#daa520]">
                <a
                  href="https://www.facebook.com/teamtechnojam"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
              {/* <<<<<<< HEAD */}
              <li className="hover:scale-110 duration-150 text-2xl text-[#daa520]">
                <a
                  href="https://www.instagram.com/teamtechnojam/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              {/* <<<<<<< HEAD */}
              <li className="hover:scale-110 duration-150 text-2xl text-[#daa520]">
                
                <a href="https://twitter.com/technojam_gu" target="_blank">
                  <FaTwitter />
                </a>
              </li>
              {/* <<<<<<< HEAD */}
              <li className="hover:scale-110 duration-150 text-2xl text-[#daa520]">
                
                <a href="https://discord.gg/d3VZen7c" target="_blank">
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> 
      <div
        className="
      text-center pt-2  text-gray-400 text-sm pb-4 bg-gray-900"
      >
        <span>Made with ❤️ by Team Technojam</span>
      </div>
    </>
  );
};

export default Footer;
