import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer: React.FunctionComponent = () => (
  <div className="footer">
    <div className="copyright__wrap">
      <h3 className="copyright">Copyright © 2020 Suyoung Kim</h3>
    </div>
    <div className="brand__wrap">
      <span>
        <a
          href="mailto://suyoung154@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </span>
      <span>
        <a
          href="https://www.facebook.com/dev.suyong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img__brand-logo" src="/images/logo_facebook.png" />
        </a>
      </span>
      <span>
        <a
          href="https://www.instagram.com/suyoung_kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img__brand-logo" src="/images/logo_instagram.png" />
        </a>
      </span>
      <span>
        <a
          href="https://github.com/kimpeupeu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img__brand-logo" src="/images/logo_github_r.png" />
        </a>
      </span>
    </div>

    <style jsx>
      {`
        .footer {
          width: 100%;
          height: 80px;
          color: #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background-color: black;
        }

        .copyright {
          margin-right: 15px;
          font-size: 1.4rem;
          font-family: "Dancing Script", Arial;
        }

        .img__brand-logo {
          width: 25px;
          height: 25px;
        }

        span {
          margin-right: 10px;
          font-size: 0.8rem;
        }

        @media (max-width: 1200px) {
          .copyright {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            flex-direction: column;
            justify-content: space-around;
          }

          .copyright {
            font-size: 1.2rem;
            margin-right: 0px;
          }
        }
      `}
    </style>
  </div>
);

export default Footer;
