import Document, { Html, Head, Main, NextScript } from 'next/document'

export interface Context {
  pathname: string
  query: string
  asPath: string
  req: Request
  res: Response
  err: Error
}

class MyDocument extends Document {
  // TODO: @tsfixme
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-gb">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument