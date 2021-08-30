export default function formatScore(score: string): string {
  let formattedScore = score.toString().replace(".", "");
  if (formattedScore.length === 1) {
    return formattedScore + "0";
  }

  return formattedScore;
}
