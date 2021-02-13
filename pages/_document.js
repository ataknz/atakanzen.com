import Document, { Html, Head, Main, NextScript } from "next/document";

const gaTrackingID = process.env.GA_TRACKING_ID;
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                {/* Global site tag (gtag.js) - Google Analytics */}

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingID}');      
             `,
            }}
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
