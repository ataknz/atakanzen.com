import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import Provider from "../context/Provider";
import * as gtag from "../utils/gtag";

import "../assets/styles/main.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";

import "@fontsource/roboto-slab";
import "@fontsource/roboto-slab/200.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ThemeProvider
        enableSystem={true}
        defaultTheme="system"
        attribute="class"
      >
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
