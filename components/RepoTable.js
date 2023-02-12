import React from "react";
import MUIDataTable, { ExpandButton } from "mui-datatables";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CommitTimeline from "./CommitTimeline";

export default function RepoTable({ data }) {
  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "language",
      label: "Language",
      options: {
        sort: false,
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        sort: false,
      },
    },
    {
      name: "stargazers_count",
      label: "Star Count",
    },
    {
      name: "forks_count",
      label: "Fork Count",
    },
    {
      name: "created_at",
      label: "Date Created",
    },
  ];

  const options = {
    filter: false,
    responsive: "standard",
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    isRowExpandable: (dataIndex, expandedRows) => {
      return true;
    },
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <CommitTimeline repo={rowData[0]} />
          </TableCell>
        </TableRow>
      );
    },
  };

  const theme = createTheme({
    overrides: {
      MUIDataTableSelectCell: {
        expandDisabled: {
          // Soft hide the button.
          visibility: "hidden",
        },
      },
    },
  });

  const components = {
    ExpandButton: function (props) {
      return <ExpandButton {...props} />;
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
        components={components}
      />
    </ThemeProvider>
  );
}
