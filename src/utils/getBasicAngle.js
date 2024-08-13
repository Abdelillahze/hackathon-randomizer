export default function getBasicAngle(angle) {
  if (angle < 360) return angle;

  return getBasicAngle(angle - 360);
}
