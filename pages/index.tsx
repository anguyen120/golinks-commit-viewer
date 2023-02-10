import type { NextPage } from 'next'
import Head from 'next/head'
import Content from "../components/Content";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <meta charSet="utf-8" />
        <title>Bryan ISD CTE Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Bryan ISD CTE Home" />
        <meta
          name="description"
          content="Bryan Independent School District serves K-12th grade students and is located in Bryan, TX."
        />
      </Head>

      <main className="flex-grow" data-theme="lofi">
        <Content />
      </main>
    </div>
  );
}

export default Home
