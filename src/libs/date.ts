import { formatDate } from "date-fns";

export function fDate(date: Date | string, format: string = "dd-MM-yyyy") {
  return formatDate(date, format);
}
