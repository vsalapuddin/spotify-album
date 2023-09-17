import { useState } from "react";

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
    <div className="flex flex-col">
      <h1 className="text-xl font-bold uppercase text-gray-200">{albumName}</h1>
      <p className="flex flex-col text-sm font-bold text-gray-200 uppercase">
        Track List
      </p>

      {tracks.slice(0, 7).map((track, index) => (
        <div key={track.name} className="flex">
          <div className="flex items-center space-x-5">
            <p className="text-sm font-bold text-gray-200">{index + 1}.</p>
            <div>
              <p className="w-[8rem] font-bold text-gray-200 md:w-[15rem] uppercase">
                {track.name}
              </p>
              <p className="w-[8rem] text-xs text-gray-300 sm:w-[10rem] md:w-[15rem] uppercase">
                {`(feat. ${track.artists
                  .map((artist) => artist.name)
                  .join(", ")})`}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            {millisToMinutesAndSeconds(track.duration_ms ?? 0)}
          </p>
        </div>
      ))}
    </div>
  );
}
