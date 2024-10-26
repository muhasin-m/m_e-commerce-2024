import { assets } from "../assets/assets";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className=" bg-gray-50">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm py-3">
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            atque optio ea autem minima? Est aliquid sint quam repudiandae ut,
            perferendis voluptatem, fuga, possimus provident praesentium quia!
            Laborum, aspernatur ex.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+49123456789</li>
            <li>info@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <hr />
        <p className="py-5 text-sm text-center">
          © {currentYear} company - All rights reserved.
        </p>

        {/* Go to Top Button */}
        <div className="flex justify-center my-5">
          <div
            onClick={scrollToTop}
            className="cursor-pointer p-2 bg-orange-400 text-white rounded-sm flex items-center hover:bg-orange-500 transition"
          >
            <AiOutlineArrowUp className="text-sm" />
            <span className=" text-sm ml-2">Go to top</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
