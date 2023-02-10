import type { NextPage } from 'next'
import Head from 'next/head'
import Content from "../components/Content";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <meta charSet="utf-8" />
        <title>Netflix Repo Explorer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Netflix Repo Explorer" />
        <meta
          name="description"
          content="A user interface to navigate the repositories and commits in Netflix’s
          Github"
        />
      </Head>

      <main className="flex-grow" data-theme="lofi">
        <Content />
      </main>
    </div>
  );
}

export default Home
