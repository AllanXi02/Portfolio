import React, { useEffect } from "react";
import "./Footer.css";

function Footer({ setPage, theme }) {
  const footer_address = [
    {
      name: "Current Project",
      path: "/",
    },
    {
      name: "Current Goal",
      path: "/",
    },
    {
      name: "Past Project",
      path: "/",
    },
    {
      name: "Past Goal",
      path: "/",
    },

  ];

  const footer_address2 = [
    {
      name: "Current",
      path: "/Home.html",
    },
    {
      name: "Past",
      path: "/about.html",
    },
    // {
    //   name: "Roses",
    //   path: "/Roses.html",
    // },
  ];

  const FooterFirstFunction = ({ footerProp }) => {
    const li = footerProp.map((item) => {
      return (
        <li className="footer-nav__li1">
          <a className="footer-nav__address1" href={item.path}
          onClick={(e) => {
            e.preventDefault();
            setPage(item.name);
          }}
          >
            {item.name}
          </a>
        </li>
      );
    });

    return (
      <nav className="footer-nav1">
        <div className="footer-nav0">
          <a className="footer-nav__address0" href="http://localhost:3000/"
            onClick={handleLogoClick}
          >
            YUE XI 
          </a>
        </div>
        <ul className="footer-ul1">{li}</ul>
      </nav>
    );
  };

  const FooterSecondFunction = ({ footerProp }) => {
    const li = footerProp.map((item) => {
      return (
        <li className="footer-nav__li">
          <a className="footer-nav__address" href={item.path}
          onClick={(e) => {
            e.preventDefault();
            setPage(item.name);
          }}
          >
            {item.name}
          </a>
        </li>
      );
    });
    return (
      <nav className="footer-nav">
        <ul className="footer-ul">{li}</ul>
      </nav>
    );
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setPage("Personal Intro");
  };

  return (
    <footer className="footer"  aria-label="footer OF YX ">
      <FooterFirstFunction footerProp={footer_address2} />
      <FooterSecondFunction footerProp={footer_address} />
    </footer>
  );
}

export default Footer;
