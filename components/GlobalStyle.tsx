export default () => (
  <style jsx global>{`
    @font-face {
      font-family: "Dancing Script";
      src: url("/fonts/DancingScript-Regular.ttf");
    }

    * {
      padding: 0;
      margin: 0;
    }

    html,
    body {
      width: 100%;
      height: 100%;
    }

    html {
      overflow-y: scroll;
    }

    body {
      font-family: Arial;
      background: black;
      color: #ccc;
      position: relative;
    }

    a {
      text-decoration: none;
    }

    .container {
      max-width: 100%;
      margin: 0 auto;
    }

    .main {
      position: relative;
      min-height: 800px;
    }

    body::after {
      content: "";
      position: absolute;
      background: url("/images/bg_me.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      opacity: 1;
      z-index: -10;
    }

    .main__content {
      padding: 32px;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    @media (max-width: 1200px) {
      body::after {
        background-size: auto 100%;
      }
    }

    @media (max-width: 900px) {
      .container {
        padding: 0 40px;
      }
    }
  `}</style>
);
