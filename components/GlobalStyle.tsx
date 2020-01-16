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

    html {
      overflow-y: scroll;
    }

    body {
      font-family: Arial;
      background: black;
      color: #ccc;
    }

    a {
      text-decoration: none;
    }

    .container {
      max-width: 100%;
      margin: 0 auto;
    }

    .main {
      padding: 0 32px;
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    @media (max-width: 900px) {
      .container {
        padding: 0 40px;
      }
    }
  `}</style>
);
