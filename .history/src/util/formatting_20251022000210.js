export function farsiNum(value) {
  const persianNumber = new Intl.NumberFormat("fa-IR").format(value);
  return persianNumber;
}
