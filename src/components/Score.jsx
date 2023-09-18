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
    <div className="flex items-center p-5 text-white">
      <motion.div
        transition={{ duration: 1 }}
        whileInView={{
          background: `conic-gradient(rgb(245,255,250) ${calculateScore(
            tracks
          )}%, transparent ${calculateScore(tracks)}%)`,
        }}
        className="w-24 h-24 mr-3 flex items-center justify-center rounded-full"
      >
        <div className="p-2 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-t from-green-300 via-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          {calculateScore(tracks)}
        </div>
      </motion.div>
      <h1>Niche Score</h1>
    </div>
  );
}
