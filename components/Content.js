import useSWR from "swr";
import Table from "./Table";

function displayData() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(
    "https://api.github.com/orgs/Netflix/repos",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  data.sort((a,b) => b.stargazers_count - a.stargazers_count);
  return <Table repos={data}></Table>;
}

export default function Content() {
  return (
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="prose max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h1>Netflix Repos</h1>
        {displayData()}
      </div>
    </div>
  );
}
