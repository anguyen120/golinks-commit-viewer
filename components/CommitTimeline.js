import * as React from "react";
import Container from "@mui/material/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { useQuery, gql } from '@apollo/client';

export default function CommitTimeline({ repo }) {
  const RepoQuery = gql`{
  repository(name: "${repo}", owner: "Netflix") {
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 5) {
            nodes {
              committedDate
              author {
                name
              }
              messageHeadline
              oid
            }
          }
        }
      }
    }
  }
  }`;
  const { data } = useQuery(RepoQuery);
  let commits = null;
  if (data?.repository?.defaultBranchRef?.target?.history?.nodes) {
    commits = data.repository.defaultBranchRef.target.history.nodes;
  }
  return (
    <Container>
      <Typography variant="h5">
        Recent commits
      </Typography>
      <Timeline position="alternate">
        {commits?.map((commit) => {
          return (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {new Date(commit?.committedDate).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6">
                  {commit?.author?.name}
                </Typography>
                <Typography variant="overline">commit {commit?.oid?.slice(0, 7)}</Typography>
                <Typography>{commit?.messageHeadline}</Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Container>
  );
}
