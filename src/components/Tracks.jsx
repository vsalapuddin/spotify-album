export default function Tracks({ tracks }) {
  const numSongs = 7;

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div className="flex flex-col items-stretch space-y-10">
      {tracks.slice(0, numSongs).map((track) => (
        <div className="flex justify-between" key={track.name}>
          <div>
            <p>{track.name}</p>
            {track.artists.map((artist, index) => (
              <p className="text-xs" key={index}>
                {artist.name}
              </p>
            ))}
          </div>

          <div className="">
            <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
