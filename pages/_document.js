import Document, { Html, Head, Main, NextScript } from "next/document";

const gaTrackingID = process.env.GA_TRACKING_ID;
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
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

                gtag('config', '${gaTrackingID}', {
                  page_path: window.location.pathname,
                });
             `,
            }}
          />
        </Head>
        <body className="bg-white text-gray-800 dark:bg-raisinBlack dark:text-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
