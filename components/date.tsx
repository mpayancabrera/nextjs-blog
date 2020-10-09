import { parseFromTimeZone } from "date-fns-timezone";
import { format } from "date-fns";

const Date = ({ dateString }: any) => {
  const date = parseFromTimeZone(dateString, { timeZone: "Europe/Berlin" });
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
