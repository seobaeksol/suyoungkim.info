import Layout from "../components/Layout";
import ImageSlider from "../components/ImageSlider";

const Home: React.FunctionComponent = () => (
  <Layout title="Home">
    <ImageSlider
      imgSources={[
        "/images/main_1.jpg",
        "/images/main_2.jpg",
        "/images/main_3.jpg",
        "/images/main_4.jpg"
      ]}
    />
  </Layout>
);

export default Home;
