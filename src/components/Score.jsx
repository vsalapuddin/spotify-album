import { motion } from "framer-motion";

export default function Score({ tracks }) {
  function calculateScore(tracks) {
    let total = 0;
    let count = 0;

    tracks.forEach((popularity) => {
      total += popularity.popularity;
      count++;
    });

    return 100 - total / count;
  }

  return (
    <div className="flex items-center">
      <motion.div
        transition={{ duration: 1 }}
        whileInView={{
          background: `conic-gradient(rgb(245,255,250) ${calculateScore(
            tracks
          )}%, transparent ${calculateScore(tracks)}%)`,
        }}
        className="w-14 h-14 md:w-24 md:h-24 mr-3 flex items-center justify-center rounded-full"
      >
        <div
          className="p-2 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center"
          style={{ background: "black" }}
        >
          {calculateScore(tracks)}
        </div>
      </motion.div>
      <h1 className="text-sm font-bold uppercase">Niche Score</h1>
    </div>
  );
}
