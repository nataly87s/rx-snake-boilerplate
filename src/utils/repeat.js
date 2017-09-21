export default function(count, item) {
  const result = new Array(count);
  for (let i = 0; i < count; i++) result[i] = item;
  return result;
}
