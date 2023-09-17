export default function Score({ tracks }) {
  function calculateScore(array) {
    let total = 0;
    let count = 0;

    tracks.forEach((popularity) => {
      total += popularity.popularity;
      count++;
    });

    return total / count;
  }

  return <div>Niche Score: {calculateScore(tracks)}</div>;
}
