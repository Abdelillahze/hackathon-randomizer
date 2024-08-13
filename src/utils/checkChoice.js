export default function checkChoice(choices, rotation) {
  const basicAngle = (Math.floor(rotation / 360) - rotation / 360) * 360;

  const degree = 360 / choices.length;
  const choicesAngels = choices.map((choice, i) => {
    const maxAngle = (i + 1) * degree;
    return { minAngle: maxAngle - degree, maxAngle: maxAngle, value: choice };
  });

  console.log(choicesAngels);
}
