export default function Tracks({ textColor, tracks }) {
  return (
    <div className="p-2 rounded-lg" style={{ color: textColor }}>
      <p className="flex flex-col text-xs md:text-sm font-bold uppercase">
        Track List
      </p>

      {tracks.slice(0, 7).map((track, index) => (
        <div key={track.name} className="flex">
          <div className="flex space-x-1 md:space-x-2">
            <p className="text-xs md:text-sm font-bold">{index + 1}.</p>
            <div>
              <p className="font-bold text-xs md:text-sm uppercase">
                {track.name}
              </p>
              <p className="w-[10rem] text-xs uppercase">
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
