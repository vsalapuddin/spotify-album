import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Score({ tracks }) {
  function calculateScore(tracks) {
    let total = 0;
    let count = 0;

    tracks.forEach((popularity) => {
      total += popularity.popularity;
      count++;
    });

    return (100 - total / count).toFixed(2);
  }

  return (
    <div className="flex items-center w-24">
      <CircularProgressbarWithChildren
        value={calculateScore(tracks)}
        background={true}
        styles={buildStyles({
          pathColor: `rgba(29, 185, 84, ${calculateScore(tracks)})`,
          textColor: "#000000",
          trailColor: "#FFFFFF",
          backgroundColor: "#000000",
        })}
      >
        <div className="flex flex-col">
          <strong>{calculateScore(tracks)}</strong>
          <strong>Niche</strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
