export default function ChooseStyle({ albumStyleChanger }) {
  return (
    <div className="flex flex-col self-start">
      <h1 className="mb-4 mt-4 self-start text-md md:text-xl font-extrabold leading-none tracking-tight text-white">
        Choose a style
      </h1>
      <ul className="grid w-full gap-4 md:grid-cols-4 grid-cols-2">
        <li>
          <input
            onChange={() => albumStyleChanger("NeonCity")}
            type="radio"
            id="city"
            name="hosting"
            value="city"
            className="hidden peer"
            required
          />
          <label
            for="city"
            className="w-full inline-flex p-2 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="text-[12px] md:text-lg font-semibold">City</div>
          </label>
        </li>
        <li>
          <input
            onChange={() => albumStyleChanger("Beach")}
            type="radio"
            id="hosting-big"
            name="hosting"
            value="hosting-big"
            className="hidden peer"
          />
          <label
            for="hosting-big"
            className="w-full inline-flex p-2 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="text-[12px] md:text-lg font-semibold">Beach</div>
          </label>
        </li>
        <li>
          <input
            onChange={() => albumStyleChanger("Fantasy")}
            type="radio"
            id="3"
            name="hosting"
            value="3"
            className="hidden peer"
            required
          />
          <label
            for="3"
            className="w-full inline-flex p-2 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="text-[12px] md:text-lg font-semibold">Fantasy</div>
          </label>
        </li>
        <li>
          <input
            onChange={() => albumStyleChanger("Fire")}
            type="radio"
            id="4"
            name="hosting"
            value="4"
            className="hidden peer"
            required
            defaultChecked
          />
          <label
            for="4"
            className="inline-flex p-2 md:p-5 w-full border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="text-[12px] md:text-lg font-semibold">Fire</div>
          </label>
        </li>
      </ul>
    </div>
  );
}
