export default function Tracks({ albumName, tracks }) {
  let totalTime = 0;

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  tracks.slice(0, 7).forEach((num) => {
    totalTime += num.duration_ms;
  });

  return (
    <div>
      <h1 className="text-xl font-bold uppercase text-black">{albumName}</h1>
      <p className="flex flex-col text-sm font-bold text-black uppercase">
        Track List
      </p>

      {tracks.slice(0, 7).map((track, index) => (
        <div key={track.name} className="flex">
          <div className="flex space-x-2">
            <p className="text-sm font-bold text-black">{index + 1}.</p>
            <div>
              <p className=" font-bold text-black uppercase">{track.name}</p>
              <p className="w-[10rem] text-xs text-black  md:w-[15rem] uppercase">
                {`(feat. ${track.artists
                  .map((artist) => artist.name)
                  .join(", ")})`}
              </p>
            </div>
          </div>
          <p className="text-sm text-black">
            {millisToMinutesAndSeconds(track.duration_ms ?? 0)}
          </p>
        </div>
      ))}
    </div>
  );
}
