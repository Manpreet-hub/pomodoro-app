import "./header.css";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../../context/";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="nav">
      <div className="header">
        <div className="navbar-brand-name">
          <h3 className="dark-theme">Timer</h3>
        </div>
        <div className="nav-icons">
          <button className="btn">
            {theme ? (
              <BsSunFill
                className="dark-theme"
                onClick={() => setTheme(false)}
              />
            ) : (
              <BsMoonFill onClick={() => setTheme(true)} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Header };
