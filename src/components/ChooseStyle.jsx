export default function ChooseStyle({ albumStyleChanger }) {
  return (
    <div>
      <h1 className="mb-4 mt-4 self-start text-md md:text-xl font-extrabold leading-none tracking-tight text-white">
        Choose a style
      </h1>
      <ul className="grid w-full gap-6 grid-cols-5">
        <li>
          <input
            onChange={() => albumStyleChanger("NeonCity")}
            type="radio"
            id="hosting-small"
            name="hosting"
            value="hosting-small"
            className="hidden peer"
            required
            defaultChecked
          />
          <label
            for="hosting-small"
            className="inline-flex items-center justify-between w-full p-3 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">Neon City</div>
            </div>
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
            className="inline-flex items-center justify-between w-full p-3 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">Beach</div>
            </div>
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
            className="inline-flex items-center justify-between w-full p-3 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="block">
              <div className="text-sm md:text-lg font-semibold">Fantasy</div>
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
            className="hidden peer"
            required
          />
          <label
            for="4"
            className="inline-flex items-center justify-between w-full p-3 md:p-5 border rounded-lg cursor-pointer hover:text-gray-300  peer-checked:border-[#1DB954] peer-checked:text-[#1DB954] text-gray-400 bg-gray-800 hover:bg-gray-700"
          >
            <div className="block">
              <div className="w-full text-sm font-semibold">Whimsical</div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}
