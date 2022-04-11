import "./header.css";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <div className="header">
        <div className="navbar-brand-name">
          <h3>Timer</h3>
        </div>
        <div className="nav-icons">
          <button className="btn">
            <i class="fa-solid fa-lightbulb"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Header };
