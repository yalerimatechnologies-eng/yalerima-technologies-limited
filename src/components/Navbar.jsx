import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "Our Services", href: "#services" },
  { number: "03", label: "Projects", href: "/projects.html" },
  { number: "04", label: "About Us", href: "#about" },
  { number: "05", label: "Contact", href: "/message.html" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle(
      "menu-open",
      menuOpen
    );

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="Yalerima Technologies home"
        >
          <span className="brand-logo">
            <img
              src="/logo.png"
              alt="Yalerima Technologies logo"
            />
          </span>

          <span className="brand-name">
            <strong>YALERIMA</strong>
            <small>TECHNOLOGIES LIMITED</small>
          </span>
        </a>

        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}

          <a
            className="nav-message"
            href="/message.html"
          >
            Message Us
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="nav-admin"
            href="/admin-system/login.html"
          >
            Admin
          </a>

          <ThemeToggle />
        </nav>

        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen((value) => !value)
          }
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`menu-overlay ${
          menuOpen ? "visible" : ""
        }`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      >
        <aside
          className={`slide-menu ${
            menuOpen ? "open" : ""
          }`}
          onClick={(event) =>
            event.stopPropagation()
          }
        >
          <div className="slide-top">
            <div className="slide-brand">
              <img src="/logo.png" alt="" />

              <div>
                <small>YALERIMA</small>
                <strong>TECHNOLOGIES</strong>
              </div>
            </div>

            <button
              type="button"
              className="close-menu"
              onClick={closeMenu}
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>

          <div className="slide-intro">
            <small>MAIN NAVIGATION</small>

            <h2>
              Explore
              <br />
              <em>Yalerima.</em>
            </h2>
          </div>

          <nav
            className="slide-links"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                <span className="slide-number">
                  {item.number}
                </span>

                <span className="slide-label">
                  {item.label}
                </span>

                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </nav>

          <div className="slide-bottom">
            <a
              href="/message.html"
              className="slide-cta"
              onClick={closeMenu}
            >
              <span>Start a Conversation</span>
              <b aria-hidden="true">→</b>
            </a>

            <a
              href="/admin-system/login.html"
              className="slide-admin"
              onClick={closeMenu}
            >
              <span>Administrator Portal</span>
              <b aria-hidden="true">↗</b>
            </a>

            <div className="slide-settings">
              <span>Appearance</span>
              <ThemeToggle />
            </div>

            <p>
              Garki, Abuja · Damboa Road, Maiduguri
              <br />
              Nigeria
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
