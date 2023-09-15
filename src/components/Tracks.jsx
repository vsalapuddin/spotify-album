import { EllipsisHorizontalIcon, HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Tracks({ tracks }) {
  const numSongs = 7;

  const [index, setIndex] = useState(1);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <>
      {tracks.slice(0, numSongs).map((track, index) => (
        <div
          key={track.name}
          className="flex cursor-pointer flex-row items-center justify-between px-2 py-2 transition duration-300 hover:bg-white hover:bg-opacity-10"
        >
          <div className="flex flex-row items-center space-x-5">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm font-bold text-gray-200">{index + 1}</p>
            </div>
            {track.album?.images[0]?.url && (
              <img
                src={track.album.images[0].url}
                className="h-10 w-10 rounded-md object-contain"
                width={50}
                height={50}
                alt={"Album Image"}
              />
            )}
            <div className="flex flex-col items-start justify-center">
              <p className="w-[8rem] truncate text-sm font-bold text-gray-200 sm:w-[10rem] md:w-[15rem]">
                {track.name}
              </p>
              <p className="w-[8rem] truncate text-xs text-gray-300 sm:w-[10rem] md:w-[15rem]">
                {track.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <p className="text-xs text-gray-300">
              {millisToMinutesAndSeconds(track.duration_ms ?? 0)}
            </p>
            <HeartIcon className="h-5 w-5 text-gray-200" />
            <EllipsisHorizontalIcon className="h-5 w-5 text-gray-200" />
          </div>
        </div>
      ))}
    </>
  );
}
