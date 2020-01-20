import Layout from "../components/Layout";
import ImageSlider from "../components/ImageSlider";

const About: React.FunctionComponent = () => (
  <Layout title="About">
    <div className="about__wrap">
      <ImageSlider
        imgSources={[
          "/images/main_1.jpg",
          "/images/main_2.jpg",
          "/images/main_3.jpg",
          "/images/main_4.jpg"
        ]}
      />
    </div>

    <style jsx>{`
      .about__wrap {
        flex: 1;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </Layout>
);

export default About;
