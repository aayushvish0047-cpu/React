import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="site-brand" to="/home" aria-label="Paste Club home">
        <span className="brand-mark" aria-hidden="true">
          P
        </span>
        <span>
          PASTE<span className="brand-accent">/</span>CLUB
        </span>
      </NavLink>
      <nav aria-label="Main navigation" className="site-nav">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `nav-link${isActive ? " nav-link-active" : ""}`
          }
        >
          Create
        </NavLink>
        <NavLink
          to="/paste"
          className={({ isActive }) =>
            `nav-link${isActive ? " nav-link-active" : ""}`
          }
        >
          My pastes
        </NavLink>
      </nav>
    </header>
  );
}
