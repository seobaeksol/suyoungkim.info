import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import GlobalStyle from "./GlobalStyle";

const Layout: React.FunctionComponent<{
  title?: String;
}> = ({ children, title }) => {
  return (
    <div className="wrap">
      <div className="html__background"></div>
      <Head>
        <title>{title ? `${title} | ` : ""}Suyoung Kim</title>
      </Head>

      <GlobalStyle />

      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
