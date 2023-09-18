export default function Tracks({ tracks }) {
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
        </div>
      ))}
    </div>
  );
}
