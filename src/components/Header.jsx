export default function Header({ logout }) {
  return (
    <header className="w-screen p-2 items-start justify-between mx-auto rounded-lg bg-[#181717]">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        <span className="flex uppercase self-center text-xl font-semibold">
          Debutify
        </span>
        <div className="flex items-center">
          <button
            className="text-white uppercase font-semibold rounded-lg text-sm py-2"
            onClick={logout}
          >
            <img src="/public/assets/logout.png" className="h-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
