import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">MiTienda</Link>
      <div>
        <Link to="/categoria/tecnologia" className="mr-4">Tecnología</Link>
        <Link to="/categoria/audio" className="mr-4">Audio</Link>
        <Link to="/categoria/perifericos">Periféricos</Link>
      </div>
    </nav>
  );
};
export default NavBar;
