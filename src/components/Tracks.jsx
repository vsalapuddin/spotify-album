export default function Tracks({ tracks }) {
  return (
    <div>
      {tracks.map((track) => (
        <p key={track.name}>[{track.name}]</p>
      ))}
    </div>
  );
}
