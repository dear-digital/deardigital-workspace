export function convertISODateToMMYYYY(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  return `${month.toString().padStart(2, '0')}.${year.toString()}`;
}
