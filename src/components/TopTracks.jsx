export default function TopTracks({ timeLengthChanger }) {
  return (
    <div className="flex flex-col self-start">
      <h1 className="mb-4 self-start text-xl font-extrabold leading-none tracking-tight text-white">
        Include top tracks from
      </h1>
      <ul class="grid w-full gap-6 md:grid-cols-3">
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
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
