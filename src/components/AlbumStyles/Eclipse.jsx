import { motion } from "framer-motion";

import Tracks from "../Tracks";
import Score from "../Score";

export default function Eclipse({ albumName, tracks }) {
  return (
    <div className="flex flex-col items-center pt-10">
      <motion.div
        initial={{ x: -600 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
        className={`flex flex-col rounded-sm absolute bg-[url('/assets/eclipse.jpg')] h-[575px] w-[600px]`}
      >
        <h1
          className="whitespace-nowrap self-center text-2xl font-bold uppercase pt-6"
          style={{ color: "black" }}
        >
          {albumName}
        </h1>

        <div className="self-center pl-10 pt-12">
          <Tracks tracks={tracks} textColor={"black"} />
        </div>
        <Score tracks={tracks} />
      </motion.div>
      <img
        src={"/assets/vibrant-vinyl.png"}
        className="rounded-full "
        width={575}
        alt={"User Image"}
        style={{ marginLeft: 475 }}
      />
      <div className="flex flex-col items-center"></div>
    </div>
  );
}
