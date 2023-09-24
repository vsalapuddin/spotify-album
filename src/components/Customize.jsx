import TopTracks from "./TopTracks";
import ChooseStyle from "./ChooseStyle";

export default function Customize({
  albumName,
  albumNameChanger,
  albumStyleChanger,
  timeLengthChanger,
}) {
  const handleChange = (event) => {
    albumNameChanger(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 md:mt-10 md:text-5xl text-4xl font-extrabold leading-none tracking-tight text-white">
        Customize
      </h1>
      <TopTracks
        timeLengthChanger={timeLengthChanger}
        className="flex self-start"
      />
      <ChooseStyle albumStyleChanger={albumStyleChanger} />
      <div class="mb-6 mt-4 self-start">
        <label
          for="default-input"
          class="text-md md:text-xl font-extrabold leading-none tracking-tight text-white"
        >
          Name your album
        </label>
        <input
          value={albumName}
          onChange={handleChange}
          maxLength="30"
          type="text"
          id="default-input"
          class="mt-4 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-800  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
}
