export default function getFontSize(ctx, choicesArray) {
  if (choicesArray.length === 0) return 50;
  const biggestLength =
    50 -
    choicesArray
      .reduce((a, b) => {
        const measureA = ctx.measureText(a).width;
        const measureB = ctx.measureText(b).width;

        return measureA > measureB ? a : b;
      })
      .replaceAll(" ", "").length *
      3;
  const choicesLength = 50 - choicesArray.length * 1.5;

  if (choicesLength < biggestLength) {
    return choicesLength;
  } else {
    return biggestLength;
  }
}
