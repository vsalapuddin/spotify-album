import { motion } from "framer-motion";

export default function Score({ tracks }) {
  function calculateScore(tracks) {
    let total = 0;
    let count = 0;

    tracks.forEach((popularity) => {
      total += popularity.popularity;
      count++;
    });
    console.log(100 - total / count);

    return (100 - total / count).toFixed(2);
  }

  return (
    <div className="flex items-center">
      <motion.div
        transition={{ duration: 1 }}
        whileInView={{
          background: `conic-gradient(rgb(29,185,84) ${calculateScore(
            tracks
          )}%, transparent ${calculateScore(tracks)}%)`,
        }}
        className="w-10 h-10 md:w-24 md:h-24 mr-3 flex items-center justify-center rounded-full"
      >
        <div
          className="text-[8px] md:text-sm w-8 h-8 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold"
          style={{ background: "black" }}
        >
          {calculateScore(tracks)}
        </div>
      </motion.div>
      <h1 className="text-[8px] md:text-sm font-bold uppercase bg-[#1DB954] rounded-lg p-1">
        Niche Score
      </h1>
    </div>
  );
}
