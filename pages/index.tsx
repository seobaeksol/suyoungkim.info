import Layout from "../components/Layout";
import ImageSlider from "../components/ImageSlider";

const Home: React.FunctionComponent = () => (
  <Layout title="Home">
    <div className="home__wrap">
      <h3 className="title">Suyoung Kim</h3>
      <p className="description">A programmer who want world to be better</p>
    </div>
    <style jsx>
      {`
        .home__wrap {
          flex: 1;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding-left: 150px;
          padding-bottom: 100px;
        }

        .title {
          font-family: "CookieRun", Arial;
          font-size: 7rem;
          padding-bottom: 20px;
        }

        .description {
          font-family: "CookieRun";
          font-size: 3.4rem;
          color: #555;
        }

        @media (max-width: 1920px) {
          .description {
            font-size: 3rem;
          }
        }

        @media (max-width: 1200px) {
          .home__wrap {
            padding: 0;
            align-items: center;
          }

          .description {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 6rem;
          }

          .description {
            font-size: 2rem;
          }
        }

        @media (max-width: 568px) {
          .home__wrap {
            align-items: baseline;
          }

          .title {
            font-size: 3rem;
          }

          .description {
            font-size: 1.3rem;
          }
        }
      `}
    </style>
  </Layout>
);

export default Home;
