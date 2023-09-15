export default function Header({ profilePic, displayName }) {
  return (
    <div className={`flex flex-col  to-transparent p-5`}>
      <div className="mt-10 flex flex-row space-x-5">
        <img
          src={"../../public/assets/example.jpg"}
          className="rounded-md object-contain "
          width={300}
          height={300}
          alt={"Playlist Image"}
        />
        <div className="flex flex-col items-start justify-end">
          <h6 className="text-sm font-bold text-gray-200">Playlist</h6>
          <h1 className="mt-5 text-3xl font-bold text-gray-200 sm:text-lg md:text-2xl lg:text-4xl">
            Your Playlist
          </h1>
          <p className="mt-2 text-sm font-semibold text-gray-300 lg:block">
            Description of your playlist
          </p>
          <div className="mt-4 hidden flex-row items-center space-x-2 sm:flex">
            <img
              src={profilePic}
              className="rounded-full object-contain"
              width={30}
              height={30}
              alt={"User Image"}
            />
            <p className="text-sm font-bold text-gray-200">
              {displayName} • 7 Songs • 1 hr 27 min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
