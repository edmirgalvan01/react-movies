import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <AiOutlineMenu size={30} color="#f3efe0" />
      <div className="header--options">
        <Link to="/buscar">
          <AiOutlineSearch size={30} color="#f3efe0" />
        </Link>
        <img
          src="https://unavatar.io/edmirgv"
          alt="Perfil de Edmir"
          className="header--userImg"
        />
      </div>
    </header>
  );
};
