export default function getRotation(ctx) {
  const mat = ctx.getTransform();
  const rad = Math.atan2(mat.b, mat.a);
  if (rad < 0) {
    // angle is > Math.PI
    return rad + Math.PI * 2;
  }
  return rad;
}
