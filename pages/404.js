import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const FourOFour = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-blue-500 dark:text-chromeYellow font-bold text-7xl pb-2">
          Umm,
        </h1>
        <h2 className="text-gray-600 dark:text-gray-500 font-semibold text-5xl">
          something went wrong...
        </h2>
        <Link href="/">
          <a className="text-2xl mt-5">Back to Home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default FourOFour;
