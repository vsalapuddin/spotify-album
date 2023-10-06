export default function Tracks({ textColor, tracks }) {
  return (
    <div className="rounded-lg text-center" style={{ color: textColor }}>
      <p className="text-[12px] font-bold uppercase">Track List</p>

      {tracks.slice(0, 5).map((track, index) => {
        const cleanedTrackName = track.name
          .split("(")[0]
          .split("feat.")[0]
          .trim();

        return (
          <div key={track.name} className="flex justify-center">
            <div className="text-[10px] font-bold pr-2">0{index + 1}.</div>
            <div>
              <p className="font-bold text-xs md:text-sm uppercase">
                {cleanedTrackName}
              </p>
              <p className="text-xs uppercase">
                {`(feat. ${track.artists
                  .map((artist) => artist.name)
                  .join(", ")})`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
