export default function Header({ logout }) {
  return (
    <header className="w-screen p-3 rounded-lg bg-[#181717]">
      <div className="flex flex-wrap md:pr-12 md:pl-12">
        <div className="flex uppercase self-center text-xl font-semibold justify-center flex-grow">
          Debutify
        </div>
        <button onClick={logout}>
          <img src="src/assets/logout.png" className="h-6" />
        </button>
      </div>
    </header>
  );
}
