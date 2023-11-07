import PlayersList from "./players-list";
import { kv } from '@vercel/kv';

const fetchPlayers = async () => {
  const players = await kv.json.get('players');

  return players;
};

const FetchPlayers = async () => {
  const players = await fetchPlayers();
  
  return (
    <PlayersList players={players} />
  );
};

export default FetchPlayers;