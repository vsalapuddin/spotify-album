import { motion } from "framer-motion";

import Tracks from "../Tracks";
import Score from "../Score";

export default function Whimsical({ albumName, displayName, tracks }) {
  return (
    <div className="flex flex-col items-center pt-10">
      <motion.div
        initial={{ x: -600 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
        className={`flex flex-col rounded-sm absolute bg-[url('/assets/Whimsical.jpg')] h-[563px] w-[563px]`}
      >
        <h1 className="whitespace-nowrap self-center text-2xl font-bold uppercase text-black pt-6">
          {albumName}
        </h1>

        <div className="self-center pl-10 pt-12 text-black">
          <Tracks
            albumName={albumName}
            displayName={displayName}
            tracks={tracks}
          />
        </div>
        <Score tracks={tracks} />
      </motion.div>
      <img
        src={"/assets/green-vinyl.png"}
        className="rounded-full "
        width={555}
        alt={"User Image"}
        style={{ marginLeft: 475 }}
      />

      <div className="flex flex-col items-center"></div>
    </div>
  );
}
