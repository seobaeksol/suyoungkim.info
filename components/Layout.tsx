import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout: React.FunctionComponent<{
  title?: String;
}> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title ? `${title} | ` : ""}Suyoung Kim</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
