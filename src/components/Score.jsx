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
    <div className="flex items-center w-12 md:w-20 ">
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
          <strong className="text-[8px] md:text-[16px]">
            {calculateScore(tracks)}
          </strong>
          <strong className="text-[8px] md:text-[16px]">Niche</strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
