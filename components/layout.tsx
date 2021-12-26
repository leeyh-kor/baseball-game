import Head from "next/head";
import { ReactNode } from "react";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <Head>
        <style jsx global>{`
          html,
          body {
            margin: 0px;
            padding: 0px;
            font-family: "Spoqa Han Sans Neo", "sans-serif";
            font-weight: 500;

            min-width: 0;
            min-height: 0;
          }
          button {
            font-family: "Spoqa Han Sans Neo", "sans-serif";
          }
          input:focus::-webkit-input-placeholder {
            opacity: 0;
          }
        `}</style>
      </Head>
      <body>{children}</body>
      <footer></footer>
    </div>
  );
};

export default Layout;
