export default function createChoices(ctx, size, choicesArray, fontSize) {
  const colors = ["#2196F3", "#FFC107", "#4CAF50", "#F44336"];
  const r = size / 2;
  const length = choicesArray.length;

  const degrees = (Math.PI * 2) / length;

  const drawSegment = (i) => {
    const txt =
      choicesArray[i].length > 14
        ? `${choicesArray[i].slice(0, 14)}...`
        : choicesArray[i];

    ctx.font = `${fontSize < 15 ? 15 : fontSize}px Arial`;
    const measures = ctx.measureText(txt);
    const txtWidth = measures.width;

    ctx.fillStyle = colors[i % colors.length];
    ctx.strokeStyle = colors[i % colors.length];
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(r, 0);
    ctx.stroke();
    ctx.arc(0, 0, r, 0, degrees);
    ctx.closePath();
    ctx.fill();
    ctx.rotate(degrees / 2);
    ctx.fillStyle = "white";
    ctx.fillText(txt, r - txtWidth - 15, 5);
  };

  for (let i = 0; i < length; i++) {
    ctx.stroke();
    drawSegment(i);
    ctx.rotate(degrees / 2);
  }
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(0, 0, 40, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
