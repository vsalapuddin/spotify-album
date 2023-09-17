import TopTracks from "./TopTracks";
import ChooseStyle from "./ChooseStyle";

export default function Customize({
  albumName,
  albumNameChanger,
  timeLengthChanger,
}) {
  const handleChange = (event) => {
    albumNameChanger(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white">
        Customize
      </h1>
      <TopTracks
        timeLengthChanger={timeLengthChanger}
        className="flex self-start"
      />
      <ChooseStyle />
      <div class="mb-6 mt-4 self-start">
        <label
          for="default-input"
          class="text-xl font-extrabold leading-none tracking-tight text-white"
        >
          Name your album
        </label>
        <input
          value={albumName}
          onChange={handleChange}
          type="text"
          id="default-input"
          class="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
}
