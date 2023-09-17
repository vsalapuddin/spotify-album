import { motion } from "framer-motion";

import Tracks from "../Tracks";

export default function Minimalist({ albumName, displayName, tracks }) {
  return (
    <div className="flex flex-col items-center pt-10">
      <motion.div
        initial={{ x: -600 }}
        transition={{ duration: 2 }}
        whileInView={{ x: 0 }}
        className={`flex flex-col rounded-sm absolute bg-[url('/assets/minimalist.jpg')] h-[575px] w-[600px]`}
      >
        <h1 className="whitespace-nowrap self-center text-2xl font-bold uppercase text-white pt-6">
          {albumName}
        </h1>

        <div className="self-start pl-10 pt-12">
          <Tracks
            albumName={albumName}
            displayName={displayName}
            tracks={tracks}
          />
        </div>
      </motion.div>
      <img
        src={"/assets/vinyl.jpg"}
        className="rounded-full "
        width={575}
        alt={"User Image"}
        style={{ marginLeft: 420 }}
      />
      <div className="flex flex-col items-center"></div>
    </div>
  );
}