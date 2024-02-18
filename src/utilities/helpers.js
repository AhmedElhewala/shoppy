export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateStr));
}

export function sliceWords(text, maxLength) {
  const newText = text.split(" ");
  if (newText.length <= maxLength) {
    return text
  } else {
    return `${newText.slice(0, maxLength - 3).join(" ")}...`
  }
}

// export function calcMinutesLeft(dateStr) {
//   const d1 = new Date().getTime();
//   const d2 = new Date(dateStr).getTime();
//   return Math.round((d2 - d1) / 60000);
// }