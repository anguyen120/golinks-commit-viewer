export default function Table({ repos }) {
  return (
    <div class="overflow-x-auto">
      <table class="table table-normal w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Language</th>
            <th>Description</th>
            <th>Star Count</th>
            <th>Fork Count</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo, index) => {
            const {
              name,
              url,
              language,
              description,
              stargazers_count,
              forks_count,
              created_at,
            } = repo;
            return (
              <tr class="hover">
                <td>{index+1}</td>
                <td><a href={url}>{name}</a></td>
                <td>{language}</td>
                <td class="break-normal whitespace-normal">{description}</td>
                <td>{stargazers_count}</td>
                <td>{forks_count}</td>
                <td>
                  {new Date(created_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Language</th>
            <th>Description</th>
            <th>Star Count</th>
            <th>Fork Count</th>
            <th>Date Created</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
