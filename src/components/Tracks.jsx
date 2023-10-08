export default function Tracks({ textColor, tracks }) {
  return (
    <div className="rounded-lg text-center" style={{ color: textColor }}>
      <p className="text-[8px] md:text-[12px] font-bold uppercase">
        Track List
      </p>

      {tracks.slice(0, 5).map((track, index) => {
        const cleanedTrackName = track.name
          .slice(0, 40)
          .split("(")[0]
          .split("feat.")[0]
          .trim();

        return (
          <div key={track.name} className="flex justify-center pr-4">
            <div className="text-[6px] md:text-[10px] font-bold pr-2 italic">
              0{index + 1}.
            </div>
            <div>
              <p className="font-bold text-[8px] md:text-sm uppercase ">
                {cleanedTrackName}
              </p>
              <p className="text-[5px] md:text-[9px] uppercase font-bold italic">
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
