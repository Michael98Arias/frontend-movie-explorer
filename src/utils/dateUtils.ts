export function isRecentDate(date: Date, months: number): boolean {
    const today = new Date();
    const pastDate = new Date(date);
    const monthsDifference = (today.getFullYear() - pastDate.getFullYear()) * 12 + (today.getMonth() - pastDate.getMonth());
    return monthsDifference < months;
  }
  