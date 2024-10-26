import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="object-cover mb-2 rounded hover:scale-110 transition ease-in-out duration-500"
          src={image[0]}
          alt=""
        />
        <p className="pt-3 pb-1 text-sm">{name} </p>
        <p className="text-sm font-medium">
          {currency} {price}{" "}
        </p>
      </div>
    </Link>
  );
};
export default ProductItem;
