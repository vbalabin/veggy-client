import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a
          href="#ref" target="_blank"
        >
          Балабин Валерий
        </a>
        <span> / </span>
        <a href="#ref" target="_blank">
          Белоусова Екатерина
        </a>
        <span> / </span>
        <a href="#ref" target="_blank">
          Калиниченко Никита
        </a>
        <span> / </span>
        <a href="#ref" target="_blank">
          Сухов Илья
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Veggy</strong> - Магазин Овощей
      </p>
    </footer>
  );
};

export default Footer;
