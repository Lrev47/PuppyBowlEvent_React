// Import the React library
import React from "react";
// Import the hook from the API service to fetch players
import { useGetPlayersQuery } from "../../api/puppyBowlApi";
// Import the CSS file for styling
import "../../index.css";

// Define the Players component
const Players = () => {
  // Use the hook to fetch the players data
  const { data, error, isLoading } = useGetPlayersQuery();

  // Show a loading message while the data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show an error message if there was an error fetching the data
  if (error) {
    return <div>{error.message}</div>;
  }

  // Render the list of players after the data has been fetched
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
        {data.data.players.map((player) => (
          <div key={player.id} className="player-card">
            <img
              className="player-image"
              src={player.imageUrl}
              alt={player.name}
            />
            <div className="player-details">
              <h2>{player.name}</h2>
              <p>{player.breed}</p>
              <p>{player.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Players component as the default export
export default Players;
