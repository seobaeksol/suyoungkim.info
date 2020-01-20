import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";

class MyDocument extends Document {
  static path?: string;

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    MyDocument.path = ctx.req?.headers.host;
    return { ...initialProps };
  }

  render() {
    const osImageContent: string = `http://${MyDocument.path}/images/banner.png`;
    return (
      <Html>
        <Head>
          <meta property="og:image" content={osImageContent} />
          <meta property="og:title" content="Suyoung Kim" />
          <meta
            property="og:description"
            content="A programmer who want world to be better"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
