import { motion } from "framer-motion";

import Tracks from "../Tracks";
import Score from "../Score";

export default function NeonCity({ albumName, tracks }) {
  return (
    <div className="flex flex-col items-center pt-10 mr-[100px] md:mr-[230px]">
      <motion.div
        initial={{ x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
        className={`object-scale-down overflow-hidden flex flex-col rounded-sm absolute bg-[url('/assets/neonCitySm.jpg')] md:bg-[url('/assets/neonCityLg.jpg')]  h-[240px] w-[240px] md:h-[563px] md:w-[563px]`}
      >
        <h1
          className="whitespace-nowrap self-center text-[10px] md:text-sm md:text-xl font-bold uppercase pt-3 md:pt-6"
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
        className="rounded-full  ml-[200px] w-[240px] md:w-[550px] flex md:ml-[550px]"
        alt={"Vinyl"}
      />
      <div className="flex flex-col items-center"></div>
    </div>
  );
}
