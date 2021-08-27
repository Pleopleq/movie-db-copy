export default function formatScore(score: string) {
  let formattedScore = score.toString().replace(".", "");
  if (formattedScore.length === 1) {
    return formattedScore + "0";
  }

  return formattedScore;
}
