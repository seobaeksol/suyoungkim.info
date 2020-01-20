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

    .html__background {
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-image: url("/images/bg_main.png");
      background-position: center;
      background-size: cover;
      z-index: -1;
      opacity: 0.5;
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

    @media (max-width: 1920px) {
      .html__background {
        background-image: url("/images/bg_main_small.png");
      }
    }

    @media (max-width: 1200px) {
      .html__background {
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
