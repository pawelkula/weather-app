export default function covertTimStampToDateString(ts) {
  const date = new Date(ts * 1000);
  return date.toDateString();
}
