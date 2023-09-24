export default function ChooseStyle({ albumStyleChanger }) {
  return (
    <div>
      <h1 className="mb-4 mt-4 self-start text-md md:text-xl font-extrabold leading-none tracking-tight text-white">
        Choose a style
      </h1>
      <ul class="grid w-full gap-6 grid-cols-5">
        <li>
          <input
            onChange={() => albumStyleChanger("Galaxy")}
            type="radio"
            id="hosting-small"
            name="hosting"
            value="hosting-small"
            class="hidden peer"
            required
          />
          <label
            for="hosting-small"
            class="inline-flex items-center justify-between w-full p-2 md:p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">Galaxy</div>
            </div>
          </label>
        </li>
        <li>
          <input
            onChange={() => albumStyleChanger("minimalist")}
            type="radio"
            id="hosting-big"
            name="hosting"
            value="hosting-big"
            class="hidden peer"
          />
          <label
            for="hosting-big"
            class="inline-flex items-center justify-between w-full p-2 md:p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-lg font-semibold">Minimalist</div>
            </div>
          </label>
        </li>
        <li>
          <input
            onChange={() => albumStyleChanger("neon")}
            type="radio"
            id="3"
            name="hosting"
            value="3"
            class="hidden peer"
            required
          />
          <label
            for="3"
            class="inline-flex w-full p-2 md:p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="text-sm md:text-lg font-semibold">Neon</div>
            </div>
          </label>
        </li>
        <li>
          <input
            onChange={() => albumStyleChanger("Whimsical")}
            type="radio"
            id="4"
            name="hosting"
            value="4"
            class="hidden peer"
            required
          />
          <label
            for="4"
            class="inline-flex w-full p-2 md:p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="block">
              <div class="w-full text-sm font-semibold">Whimsical</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}
