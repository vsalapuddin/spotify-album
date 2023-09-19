import { motion } from "framer-motion";

import Tracks from "../Tracks";
import Score from "../Score";

export default function Galaxy({ albumName, tracks }) {
  return (
    <div className="flex flex-col items-center pt-10">
      <motion.div
        initial={{ x: -600 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
        className={`flex flex-col rounded-sm absolute bg-[url('/assets/galaxy.jpg')] h-[563px] w-[563px]`}
      >
        <h1
          className="whitespace-nowrap self-center text-2xl font-bold uppercase pt-6"
          style={{ color: "white" }}
        >
          {albumName}
        </h1>

        <div className="self-center pl-10 pt-12">
          <Tracks tracks={tracks} textColor={"white"} />
        </div>
        <Score tracks={tracks} />
      </motion.div>
      <img
        src={"/assets/purple-vinyl.png"}
        className="rounded-full "
        width={575}
        alt={"User Image"}
        style={{ marginLeft: 500 }}
      />
      <div className="flex flex-col items-center"></div>
    </div>
  );
}
