export default function Tracks({ tracks }) {
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
    <div className="p-2 rounded-lg">
      <p className="flex flex-col text-sm font-bold text-white uppercase">
        Track List
      </p>

      {tracks.slice(0, 7).map((track, index) => (
        <div key={track.name} className="flex">
          <div className="flex space-x-2">
            <p className="text-sm font-bold text-white">{index + 1}.</p>
            <div>
              <p className=" font-bold text-white uppercase">{track.name}</p>
              <p className="w-[10rem] text-xs text-white  md:w-[15rem] uppercase">
                {`(feat. ${track.artists
                  .map((artist) => artist.name)
                  .join(", ")})`}
              </p>
            </div>
          </div>
          {/* <p className="text-sm text-white">
            {millisToMinutesAndSeconds(track.duration_ms ?? 0)}
          </p> */}
        </div>
      ))}
    </div>
  );
}
