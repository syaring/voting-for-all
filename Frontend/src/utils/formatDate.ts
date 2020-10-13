export function formatDate(date: string): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  return `
    ${year.toString()}-${month > 9 ? month.toString() : '0'+month.toString()}-${day > 9 ? day.toString() : '0'+day.toString()}
  `
}
