import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__/";
import { useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql(`
  # Query goes here
  query GetTracks {
  tracksForHome {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
  }
}
`);
const Tracks = () => {
	const { data, error, loading } = useQuery(TRACKS);

	// if (loading) return "Loading...";

	// if (error) return `Error! ${error.message} `;

	return (
		<Layout grid>
			<QueryResult error={error} loading={loading} data={data}>
				{" "}
				{data?.tracksForHome?.map((track) => {
					return <TrackCard key={track.id} track={track} />;
				})}
			</QueryResult>
		</Layout>
	);
};

export default Tracks;
