export default function TopTracks({ timeLengthChanger }) {
  return (
    <div className="flex flex-col self-start">
      <h1 className="mb-4 self-start text-md md:text-xl font-extrabold leading-none tracking-tight text-white">
        Include top tracks from
      </h1>
      <ul className="grid w-full gap-6 grid-cols-3">
        <li>
          <input
            onChange={() => timeLengthChanger("short")}
            type="radio"
            id="4weeks"
            name="topTracks"
            value="4weeks"
            className="hidden peer"
            required
          />
          <label
            for="4weeks"
            className="inline-flex items-center justify-between w-full p-2 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="w-full text-[12px] md:text-lg font-semibold">
              4 Weeks
            </div>
          </label>
        </li>
        <li>
          <input
            onChange={() => timeLengthChanger("medium")}
            type="radio"
            id="6weeks"
            name="topTracks"
            value="6weeks"
            className="hidden peer"
            defaultChecked
          />
          <label
            for="6weeks"
            className="inline-flex items-center justify-between w-full p-2 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="w-full text-[12px] md:text-lg font-semibold">
              6 Weeks
            </div>
          </label>
        </li>
        <li>
          <input
            onChange={() => timeLengthChanger("long")}
            type="radio"
            id="allTime"
            name="topTracks"
            value="allTime"
            className="hidden peer"
            required
          />
          <label
            for="allTime"
            className="inline-flex items-center justify-between w-full p-2 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="w-full text-[12px] md:text-lg font-semibold">
              All Time
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}
