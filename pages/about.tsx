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
      <p className="title">Suyoung Kim</p>
      <p className="sub-title">1994.12.09</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mattis rhoncus urna
        neque viverra justo nec ultrices. Cursus in hac habitasse platea
        dictumst quisque sagittis purus sit. Nulla pellentesque dignissim enim
        sit amet venenatis urna cursus. Sed viverra tellus in hac habitasse
        platea dictumst vestibulum rhoncus. Erat imperdiet sed euismod nisi
        porta. Penatibus et magnis dis parturient montes nascetur ridiculus mus
        mauris. Convallis posuere morbi leo urna molestie. Augue ut lectus arcu
        bibendum at varius vel pharetra. Nec ullamcorper sit amet risus nullam
        eget felis eget. Morbi tristique senectus et netus et malesuada fames.
        Ut consequat semper viverra nam libero justo laoreet sit amet. Nibh
        tellus molestie nunc non. Id interdum velit laoreet id. Ornare arcu dui
        vivamus arcu felis bibendum. Vel facilisis volutpat est velit egestas
        dui id ornare. Diam phasellus vestibulum lorem sed risus ultricies
        tristique. Elementum facilisis leo vel fringilla est ullamcorper eget
        nulla facilisi. Adipiscing elit pellentesque habitant morbi tristique
        senectus et. Facilisis volutpat est velit egestas dui id ornare arcu
        odio. Ante in nibh mauris cursus. Sed egestas egestas fringilla
        phasellus faucibus scelerisque eleifend donec. Magna fringilla urna
        porttitor rhoncus. Consequat ac felis donec et odio pellentesque diam.
        Eget felis eget nunc lobortis mattis. Erat imperdiet sed euismod nisi
        porta lorem mollis aliquam ut. Ornare arcu dui vivamus arcu felis
        bibendum. Semper viverra nam libero justo laoreet sit amet. Euismod
        elementum nisi quis eleifend quam adipiscing. Nibh tellus molestie nunc
        non blandit. Ut lectus arcu bibendum at. Nam libero justo laoreet sit
        amet cursus. Facilisis magna etiam tempor orci eu lobortis elementum.
        Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Nunc
        sed velit dignissim sodales ut eu sem integer. Elementum integer enim
      </p>
    </div>

    <style jsx>{`
      .about__wrap {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .about__wrap > * {
        max-width: 650px;
      }

      .title {
        font-family: "Dancing Script";
        font-size: 4rem;
      }

      .sub-title {
        font-family: "Dancing Script";
        font-size: 1.2rem;
      }

      .description {
        font-size: 1.2rem;
        font-family: "Dancing Script";
      }
    `}</style>
  </Layout>
);

export default About;
