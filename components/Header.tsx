import ActiveLink from "./ActiveLink";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header: React.FunctionComponent = () => {
  const [mobileNavShown, setMobileNavShown] = useState(false);

  return (
    <div className="header__container">
      <header className="container">
        <h3 className="header__title">Suyoung Kim</h3>

        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/projects">Projects</ActiveLink>
          <ActiveLink href="/media">Media</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
        </nav>

        <div className="header__mobile-toggle">
          <FontAwesomeIcon
            icon={mobileNavShown ? faTimes : faBars}
            onClick={() => setMobileNavShown(!mobileNavShown)}
            size="lg"
          />
        </div>
      </header>

      <nav className="header__mobile-nav container">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
        <ActiveLink href="/projects">Projects</ActiveLink>
        <ActiveLink href="/media">Media</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </nav>

      <style jsx>{`
        header {
          padding-top: 32px;
          padding-bottom: 24px;
          display: flex;
          justify-content: center;
          position: relative;
          align-items: center;
          flex-direction: column;
          z-index: 2000;
          border-bottom: 1px solid white;
        }

        header::after {
          content: "";
          background-color: black;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: -1;
          opacity: 0.6;
        }

        nav :global(a):not(:last-child) {
          margin-right: 24px;
        }

        .header__mobile-toggle,
        .header__mobile-nav {
          display: none;
        }

        .header__mobile-toggle {
        }

        .header__title {
          font-family: "Dancing Script", Arial;
          font-size: 3.4rem;
          padding-bottom: 24px;
          color: white;
          text-shadow: 2px 2px black;
        }

        @media (max-width: 768px) {
          header {
            justify-content: space-between;
            flex-direction: row;
          }

          nav {
            display: none;
          }

          .header__title {
            font-size: 1.6rem;
            padding: 0;
          }

          .header__mobile-toggle {
            display: block;
          }

          .header__mobile-nav {
            display: ${mobileNavShown ? "flex" : "none"};
            flex-direction: column;
            align-items: center;
            margin-bottom: 32px;
          }

          .header__mobile-nav :global(a) {
            font-size: 1.2rem;
            border-bottom: 1px solid #ccc;
            width: 100%;
            text-align: center;
            padding-top: 16px;
            padding-bottom: 16px;
          }

          .header__mobile-nav :global(a):not(:last-child) {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
