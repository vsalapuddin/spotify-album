export default function Customize({ albumName }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white">
        Customize
      </h1>
      <h1 className="mb-4 self-start text-xl font-extrabold leading-none tracking-tight text-white">
        Include top tracks from
      </h1>
      <ul class="grid w-full gap-6 md:grid-cols-3">
        <li>
          <input
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
      <h1 className="mb-4 mt-4 self-start text-xl font-extrabold leading-none tracking-tight text-white">
        Choose a style
      </h1>
      <ul class="grid w-full gap-6 md:grid-cols-5">
        <li>
          <input
            type="radio"
            id="hosting-small"
            name="hosting"
            value="hosting-small"
            class="hidden peer"
            required
          />
          <label
            for="hosting-small"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">This Style</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="hosting-big"
            name="hosting"
            value="hosting-big"
            class="hidden peer"
          />
          <label
            for="hosting-big"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">This Style</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="3"
            name="hosting"
            value="3"
            class="hidden peer"
            required
          />
          <label
            for="3"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">This Style</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="4"
            name="hosting"
            value="4"
            class="hidden peer"
            required
          />
          <label
            for="4"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">This Style</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="5"
            name="hosting"
            value="5"
            class="hidden peer"
            required
          />
          <label
            for="5"
            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">This Style</div>
            </div>
          </label>
        </li>
      </ul>
      <div class="mb-6 mt-4 self-start">
        <label
          for="default-input"
          class="text-xl font-extrabold leading-none tracking-tight text-white"
        >
          Name your album
        </label>
        <input
          value={albumName}
          type="text"
          id="default-input"
          class="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
}
