import './Navbar.css'
import { HiDotsHorizontal } from "react-icons/hi";


function Navbar() {
  return (
    <div className="nav">
      <div className="Logo">logo</div>
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
        <button type="button" className="btn">
          Sign In
        </button>
        <button type="button" className="btn">
          <HiDotsHorizontal className='hdh'/>
        </button>
      </div>
    </div>
  );
}

export default Navbar