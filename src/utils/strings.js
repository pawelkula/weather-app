export function covertTimeStampToDateString(ts) {
  const date = new Date(ts * 1000);
  return date.toDateString();
}

export function formatTemp(n) {
  return `${parseInt(n, 10)} °C`;
}
