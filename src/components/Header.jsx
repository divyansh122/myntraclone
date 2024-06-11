import Myntralogo from "../assets/myntra.png";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img className="myntra_home" src={Myntralogo} alt="Myntra Home" />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <IoMdSearch />
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <a className="action_container" href="#">
            <CgProfile />
            <span className="action_name">Profile</span>
          </a>
          <a className="action_container" href="#">
            <CiHeart />
            <span className="action_name">Wishlist</span>
          </a>
          <Link className="action_container" to="/bag">
            <IoBagOutline />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </Link>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
