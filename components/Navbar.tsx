"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Couple", href: "#couple" },
  { label: "Events", href: "#events" },
  { label: "Venue", href: "#venue" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/80 backdrop-blur-md shadow-[0_1px_0_rgba(198,161,91,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#home");
          }}
          className="font-display text-xl tracking-widest2 text-burgundy"
        >
          A&amp;P
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(l.href);
                }}
                className="font-body text-xs tracking-widest2 text-charcoal/75 transition-colors hover:text-burgundy"
              >
                {l.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex h-11 w-11 items-center justify-center text-burgundy md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-ivory/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col px-6 pb-6">
              {links.map((l) => (
                <li key={l.href} className="border-b border-gold/15">
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(l.href);
                    }}
                    className="block py-4 font-body text-sm tracking-widest2 text-charcoal/80"
                    style={{ minHeight: 44 }}
                  >
                    {l.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
