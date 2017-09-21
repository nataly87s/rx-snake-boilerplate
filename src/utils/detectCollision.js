export default function (point, snake) {
  return snake.some(x => point.equals(x));
}
