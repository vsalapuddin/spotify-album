export default function Tracks({ tracks }) {
  const numSongs = 7;

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div className="">
      {tracks.slice(0, numSongs).map((track) => (
        <div className="flex">
          <p key={track.name}>{track.name}</p>

          {track.artists.map((artist) => (
            <p>{artist.name}</p>
          ))}

          <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
        </div>
      ))}
    </div>
  );
}
