import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  // Check viewport width for mobile/desktop
  const checkViewport = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isMobile]);

  return (
    <>
      {/* --- Navbar --- */}
      <nav ref={navRef} className="navbar">
        {/* Logo */}
        <div className="navbar-brand">
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            JSC
          </motion.div>
          <div className="brand-info">
            <h1 className="brand-name">Jaydeep</h1>
            <div className="brand-tagline">Full Stack Developer</div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <div className="nav-links-desktop">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                className="nav-link"
              >
                {({ isActive }) => (
                  <motion.div
                    className="nav-link-wrapper"
                    whileHover={{
                      scale: 1.1,
                      color: "var(--accent)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className={isActive ? "active" : ""}
                      animate={{ color: isActive ? "var(--accent)" : "white" }}
                      transition={{ duration: 0.3 }}
                    >
                      {l.label}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="nav-underline"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                )}
              </NavLink>
            ))}
          </div>
        )}

        {/* Hamburger Menu Button */}
        {isMobile && (
          <motion.button
            className="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 45, y: 8 },
                closed: { rotate: 0, y: 0 },
              }}
              className="hamburger-line"
            />
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              className="hamburger-line"
            />
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: -45, y: -8 },
                closed: { rotate: 0, y: 0 },
              }}
              className="hamburger-line"
            />
          </motion.button>
        )}
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="mobile-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Mobile Links */}
              <div className="mobile-links">
                {links.map((l, index) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={l.to}
                      onClick={() => setIsOpen(false)}
                      className="mobile-link"
                    >
                      {({ isActive }) => (
                        <motion.div
                          className={`mobile-link-content ${
                            isActive ? "active" : ""
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{l.label}</span>
                          {isActive && (
                            <motion.div
                              className="mobile-link-indicator"
                              layoutId="mobile-indicator"
                            />
                          )}
                        </motion.div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}