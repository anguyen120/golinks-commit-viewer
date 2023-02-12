import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Head from "next/head";
import RepoTable from "../components/RepoTable";
import useSWR from "swr";

const Home: NextPage = () => {
  const getRepo = () => {
    const fetcher = (...args: any) => fetch(args).then((res) => res.json());
    const { data, error } = useSWR(
      "https://api.github.com/orgs/Netflix/repos",
      fetcher
    );
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    data.map(
      (repo: { created_at: string | number | Date }) =>
        (repo.created_at = new Date(repo.created_at).toLocaleDateString(
          "en-US",
          {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          }
        ))
    );
    data.sort(
      (a: { stargazers_count: number }, b: { stargazers_count: number }) =>
        b.stargazers_count - a.stargazers_count
    );
    return <RepoTable data={data} />;
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Netflix Repo Explorer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Netflix Repo Explorer" />
        <meta
          name="description"
          content="A user interface to navigate the repositories and commits in Netflix's
          Github"
        />
      </Head>

      <main>
        <Container disableGutters maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Netflix Repos
          </Typography>
          {getRepo()}
        </Container>
      </main>
    </div>
  );
};

export default Home;
