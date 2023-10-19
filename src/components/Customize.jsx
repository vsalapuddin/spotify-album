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
      <div className="mb-6 mt-4 self-start">
        <label
          htmlFor="default-input"
          className="text-md md:text-xl font-extrabold leading-none tracking-tight text-white"
        >
          Name your album
        </label>
        <input
          value={albumName}
          onChange={handleChange}
          maxLength="30"
          type="text"
          id="default-input"
          className="mt-4 border text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-[#1DB954] w-full p-2.5 bg-gray-800"
        />
      </div>
    </div>
  );
}
