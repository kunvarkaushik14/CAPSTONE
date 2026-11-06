import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";
import Logo from "../common/Logo.jsx";

const links = [
  { label: "School Portal", href: "/student" },
  { label: "College Portal", href: "/college" },
  { label: "Fresher Portal", href: "/fresher" },
  { label: "Explore Careers", href: "/discover" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nx-navbar">
      <Logo />

      <nav className={`nx-nav-links ${open ? "nx-nav-open" : ""}`}>
        {links.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="nx-nav-actions">
        <Link to="/login" className="nx-nav-login">
          Sign in
        </Link>

        <Link to="/register" className="nx-nav-cta">
          Get started <ArrowUpRight size={16} />
        </Link>
      </div>

      <button
        className="nx-mobile-menu"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
