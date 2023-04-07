import React, { useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? localTheme : "light-theme";
  });
  const toggleTheme = () => {
    if (isDark === "light-theme") {
      setIsDark("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      setIsDark("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  };
  useEffect(() => {
    document.body.className = isDark;
  }, [isDark]);
  return (
    <nav className="nav-container">
      <h3>Logo</h3>
      <ul className={`nav-links ${!isOpen ? "hide" : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Inspiration</a>
        </li>
        <li>
          <a href="/shop">Find Work</a>
        </li>
        <li>
          <a href="/shop">Learn Design</a>
        </li>
        {isOpen ? (
          <>
            <div className="nav-search">
              <img src="../search.png" alt="" height={10} />
              <input type="text" placeholder="search" />
            </div>
            <button className="nav-btn">Login</button>
          </>
        ) : null}
      </ul>
      <div className="nav-filed">
        <div className="nav-search">
          <img src="../search.png" alt="" height={10} />
          <input type="text" placeholder="search" />
        </div>
        {
          isDark === "light-theme" ? (
            <BsFillMoonStarsFill style={{margin:'0 1rem', cursor:'pointer'}} onClick={() => toggleTheme()} />):(
              <BsSun style={{margin:'0 1rem', cursor:'pointer'}} onClick={() => toggleTheme()} />)
        }
        <button className="nav-btn">Login</button>
      </div>
      <div className="nav-toggle">
        {isOpen ? (
          <BsXLg size={"1.5rem"} onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <BiMenuAltRight size={"2rem"} onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
    </nav>
  );
}
