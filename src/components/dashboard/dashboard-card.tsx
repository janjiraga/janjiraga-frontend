import { Event } from "@/types";
import { Button } from "../ui/button";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

type DashboardCardParams = {
  event: Event;
};

function DashboardCard({ event }: DashboardCardParams) {
  return (
    <div className="flex items-center justify-between p-4 border border-solid border-gray-300 rounded-lg">
      <div>
        <p>{event?.name}</p>
        <p>
          {event?.category?.name} |{" "}
          {dayjs(event?.dateTimeStart).format("ddd DD MMM YYYY, HH:MM")} |{" "}
          {event?.venue?.name}
        </p>
      </div>
      <Button
        variant="ghost"
        className="text-j-green-dark hover:bg-j-green-dark hover:text-white"
      >
        <Link to={`/events/${event?.slug}`}>Lihat Detail</Link>
      </Button>
    </div>
  );
}

export default DashboardCard;
