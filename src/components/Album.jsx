import { motion } from "framer-motion";

import Tracks from "./Tracks";
import Score from "./Score";

export default function Album({
  albumCover,
  albumName,
  displayName,
  tracks,
  printRef,
}) {
  return (
    <div
      ref={printRef}
      className="flex flex-col items-start justify-center w-[350px] h-[400px] md:w-[795px] md:h-[800px] bg-[#0D1333] pl-2 rounded-lg border-2 md:border-8"
    >
      <motion.div
        initial={{ x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
        className={`overflow-hidden flex flex-col rounded-sm absolute bg-[url('/assets/${albumCover}Sm.jpg')] md:bg-[url('/assets/${albumCover}Lg.jpg')]  h-[240px] w-[240px] md:h-[563px] md:w-[563px]`}
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
      </motion.div>
      <img
        src={`/assets/${albumCover}Vinyl.png`}
        className="rounded-full ml-[100px] w-[240px] md:w-[625px] flex md:ml-[200px]"
        alt={"Vinyl"}
      />
      <div className="pb-20 absolute flex md:bottom-[135px]">
        <Score tracks={tracks} />
      </div>
    </div>
  );
}