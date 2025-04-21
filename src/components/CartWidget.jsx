import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const CartWidget = ({ totalItems }) => {
  return (
    <Link to="/cart" className="relative flex items-center gap-1">
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
