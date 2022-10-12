import './Navbar.css'
import { HiDotsHorizontal } from "react-icons/hi";

//<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"></link>

function Navbar() {
  return (
    <div className="nav">
      <div className="Logo">Anytown Real Estate</div>
      <ul className="nav__links">
        <li>
          <a href="#">buy</a>
        </li>
        <li>
          <a href="#">rent</a>
        </li>
        <li>
          <a href="#">kredyty</a>
        </li>
        <li>
          <a href="#">overseas</a>
        </li>
        <li>
          <a href="#">blog</a>
        </li>
      </ul>
      <div className="btn__group">
        <button type="button" className="btn btn1">
          Sign In
        </button>
        <button type="button" className="btn btn2">
          <HiDotsHorizontal className="hdh" />
        </button>
      </div>
    </div>
  );
}

export default Navbar