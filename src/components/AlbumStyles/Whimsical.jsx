import { motion } from "framer-motion";

import Tracks from "../Tracks";
import Score from "../Score";

export default function Whimsical({ albumName, displayName, tracks }) {
  return (
    <div className="flex flex-col items-center pt-10 mr-[100px] md:mr-[230px]">
      <motion.div
        initial={{ x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
        className={`flex flex-col rounded-sm absolute bg-[url('/assets/fantasySm.jpg')] md:bg-[url('/assets/fantasyLg.jpg')]  h-[240px] w-[240px] md:h-[563px] md:w-[563px]`}
      >
        <h1 className="whitespace-nowrap self-center text-[10px] md:text-sm md:text-xl font-bold uppercase pt-3 md:pt-6">
          {albumName}
        </h1>

        <div className="self-center pl-2 md:pl-10 pt-2 md:pt-12 text-black">
          <Tracks
            albumName={albumName}
            displayName={displayName}
            tracks={tracks}
          />
        </div>
        <div className="absolute bottom-2 left-0">
          <Score tracks={tracks} textColor={"black"} />
        </div>
      </motion.div>
      <img
        src={"/assets/orange-vinyl.png"}
        className="rounded-full  ml-[200px] w-[240px] md:w-[550px] flex md:ml-[550px]"
        alt={"Vinyl"}
      />

      <div className="flex flex-col items-center"></div>
    </div>
  );
}
