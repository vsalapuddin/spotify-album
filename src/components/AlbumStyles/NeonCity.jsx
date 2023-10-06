import { motion } from "framer-motion";

import Tracks from "../Tracks";
import Score from "../Score";

export default function NeonCity({ albumName, tracks }) {
  return (
    <div className="flex flex-col items-center pt-10">
      <motion.div
        initial={{ x: -600 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
        className={`flex flex-col rounded-sm absolute bg-[url('/assets/neonCity.jpg')] h-[300px] w-[300px] md:h-[563px] md:w-[563px]`}
      >
        <h1
          className="whitespace-nowrap self-center text-sm md:text-xl font-bold uppercase pt-6"
          style={{ color: "white" }}
        >
          {albumName}
        </h1>

        <div className="pt-2 md:pt-12">
          <Tracks tracks={tracks} textColor={"white"} />
        </div>
        <div className="absolute bottom-2 left-0">
          <Score tracks={tracks} />
        </div>
      </motion.div>
      <img
        src={"/assets/purple-vinyl.png"}
        className="rounded-full w-[250px] md:w-[500px] flex md:ml-[500px]"
        alt={"Vinyl"}
      />
      <div className="flex flex-col items-center"></div>
    </div>
  );
}
