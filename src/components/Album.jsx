import Tracks from "./Tracks";
import Score from "./Score";

export default function Album({
  albumCover,
  albumName,
  displayName,
  tracks,
  printRef,
}) {
  let albumColor = "#0D1333";
  if (albumCover === "NeonCity") {
    albumColor = "#0D1333";
  } else if (albumCover === "Beach") {
    albumColor = "#7EDAF1";
  } else if (albumCover === "Fantasy") {
    albumColor = "#FCC872";
  } else if (albumCover === "Fire") {
    albumColor = "#383C45";
  }
  const imageSm = new Image();
  imageSm.src = `/assets/${albumCover}Sm.jpg`;

  return (
    <div
      ref={printRef}
      className={`flex flex-col items-start justify-center w-[350px] h-[400px] md:w-[795px] md:h-[800px] bg-[${albumColor}] pl-4 rounded-lg border-2`}
    >
      <div
        className={`border-4 overflow-hidden flex flex-col rounded-sm absolute bg-[${imageSm}] md:bg-[url('/assets/${albumCover}Lg.jpg')]  h-[240px] w-[240px] md:h-[563px] md:w-[563px]`}
      >
        <h1
          className="whitespace-nowrap self-center text-[10px] md:text-sm md:text-xl font-bold uppercase pt-3 md:pt-6"
          style={{ color: "white" }}
        >
          {albumName}
        </h1>
        <h2
          className="whitespace-nowrap self-center text-[6px] md:text-[10px] font-bold uppercase pt-1 "
          style={{ color: "white" }}
        >
          {displayName}
        </h2>
        <div className="pt-2 md:pt-12">
          <Tracks tracks={tracks} textColor={"white"} />
        </div>
        <div className="flex self-end pr-0.5 mt-12 md:pr-2 md:mt-40">
          <img
            src={`/assets/presented.png`}
            className="w-[45px] md:w-[120px]"
          />
        </div>
      </div>
      <img
        src={`/assets/${albumCover}Vinyl.png`}
        className="rounded-full ml-[100px] w-[240px] md:w-[625px] flex md:ml-[180px]"
        alt={"Vinyl"}
      />
      <div className="flex mb-[-50px]">
        <Score tracks={tracks} />
      </div>
      <img
        src={`/assets/Spotify.png`}
        className="rounded-full ml-[600px] w-[150px] flex mb-[-55px]"
      />
    </div>
  );
}
