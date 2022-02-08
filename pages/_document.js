import Document, { Html, Head, Main, NextScript } from "next/document";

const gaTrackingID = process.env.GA_TRACKING_ID;
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=693qL8BNpN"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png?v=693qL8BNpN"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png?v=693qL8BNpN"
          />
          <link rel="manifest" href="/site.webmanifest?v=693qL8BNpN" />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg?v=693qL8BNpN"
            color="#1b1b1e"
          />
          <link rel="shortcut icon" href="/favicon.ico?v=693qL8BNpN" />
          <meta name="msapplication-TileColor" content="#faa916" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="google-site-verification"
            content="QEyNh-IOVjpqNQt0wdWhxB5w-kDDNvBZ2l_iNsGt_i4"
          />
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
