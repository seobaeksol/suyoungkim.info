export default () => (
  <style jsx global>{`
    @font-face {
      font-family: "Dancing Script";
      src: url("/fonts/DancingScript-Regular.ttf");
    }

    @font-face {
      font-family: "CookieRun";
      src: url("/fonts/CookieRun-Regular.ttf");
    }

    * {
      padding: 0;
      margin: 0;
    }

    html,
    body,
    #__next,
    .wrap {
    }

    html {
      overflow-y: scroll;
    }

    body {
      font-family: Arial;
      // background: black;
      // color: #ccc;
      position: relative;
    }

    a {
      text-decoration: none;
      color: #ccc;
    }

    .wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100vh;
    }

    .container {
      max-width: 100%;
      margin: 0 auto;
    }

    .main {
      padding: 32px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: relative;
      flex: 1;
    }

    body::after {
      content: "";
      position: absolute;
      background-image: url("/images/bg_main.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      opacity: 0.5;
      z-index: -10;
    }

    @media (max-width: 1920px) {
      body::after {
        background-image: url("/images/bg_main_small.png");
      }
    }

    @media (max-width: 1200px) {
      body::after {
        background-image: url("/images/bg_mobile.png");
      }
    }

    @media (max-width: 900px) {
      .container {
        padding: 0 40px;
      }
    }
  `}</style>
);
