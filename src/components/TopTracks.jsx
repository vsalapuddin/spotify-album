export default function TopTracks({ timeLengthChanger }) {
  return (
    <div className="flex flex-col self-start">
      <h1 className="mb-4 self-start text-md md:text-xl font-extrabold leading-none tracking-tight text-white">
        Include top tracks from
      </h1>
      <ul class="grid w-full gap-6 grid-cols-3">
        <li>
          <input
            onChange={() => timeLengthChanger("short")}
            type="radio"
            id="4weeks"
            name="topTracks"
            value="4weeks"
            class="hidden peer"
            required
          />
          <label
            for="4weeks"
            class="inline-flex items-center justify-between w-full p-3 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">4 Weeks</div>
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
            class="hidden peer"
          />
          <label
            for="6weeks"
            class="inline-flex items-center justify-between w-full p-3 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">6 Weeks</div>
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
            class="hidden peer"
            required
          />
          <label
            for="allTime"
            class="inline-flex items-center justify-between w-full p-3 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">All Time</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}
