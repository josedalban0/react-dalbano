import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">
        <Link to="/">MiTienda</Link>
      </h1>
      <div className="flex gap-4">
        <Link to="/categoria/tecnologia">Tecnología</Link>
        <Link to="/categoria/audio">Audio</Link>
        <Link to="/categoria/perifericos">Periféricos</Link>
      </div>
      <CartWidget totalItems={totalItems} />
    </nav>
  );
};

export default NavBar;
