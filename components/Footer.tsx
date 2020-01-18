const Footer: React.FunctionComponent = () => (
  <div className="footer">
    <h1>Suyoung Kim</h1>
    <span>suyoung154@gmail.com</span>
    <span>Facebook</span>
    <span>Instargram</span>
    <span>Github</span>
    <style jsx>
      {`
        .footer {
          width: 100%;
          height: 120px;
          color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .footer::after {
          content: "";
          background-color: #ccc;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -1;
          opacity: 0.7;
        }
      `}
    </style>
  </div>
);

export default Footer;
