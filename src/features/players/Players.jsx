// Import the React library
import React from "react";
// Import the generated hook from our RTK Query API slice
import { useGetPlayersQuery } from "../../api/puppyBowlApi";
// Import the CSS styles for this component
import "../../index.css";
// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data, error, isLoading } = useGetPlayersQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <div> {error.message} </div>;
  }

  // Show the fetched data after it has arrived
  return (
    <div>
      <div className="intro">
        <h1>Welcome to the Puppy Bowl Event!</h1>
        <p>Come and join us for a fun-filled day of adorable puppy football!</p>
        <p>
          Get ready to meet the talented pups competing in this year's Puppy
          Bowl...and here they are.
        </p>
      </div>
      <div className="players">
        {/* Map through the data array and generate a div for each player */}
        {data.data.players.map((player) => (
          // Use the player's ID as the key for this div
          <div key={player.id} className="player-card">
            <img
              className="player-image"
              src={player.imageUrl}
              alt={player.name}
            />

            <div className="player-details">
              <h2> {player.name} </h2>

              <p> {player.breed} </p>

              <p> {player.status} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
