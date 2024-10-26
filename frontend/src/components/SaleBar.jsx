import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importing the close icon

const SaleBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="bg-orange-400 text-white w-full py-3 px-4 flex justify-center items-center ">
        <div className="max-w-screen-xl w-full flex justify-between sm:justify-center items-center relative">
          <span className="text-lg font-semibold">
            🍂 Autumn sale! Save up to 25%
          </span>
          <AiOutlineClose
            className="cursor-pointer text-xl absolute right-4 lg:right-0"
            onClick={handleClose}
          />
        </div>
      </div>
    )
  );
};

export default SaleBar;
