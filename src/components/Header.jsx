export default function Header({ logout }) {
  return (
    <header className="w-screen p-2 items-start justify-between mx-auto rounded-lg bg-[#181717]">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        <span class="flex uppercase self-center text-xl font-semibold">
          Debutify
        </span>
        <div class="flex items-center lg:order-2">
          <button
            className="text-white uppercase font-semibold rounded-lg text-sm px-4 py-2 mr-2"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
