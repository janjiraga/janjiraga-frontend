import { Link } from "react-router-dom";
import { PlaceIcon, TimeIcon } from "../ui/shared/icon";
import dayjs from "dayjs";
import { Badge } from "../ui/badge";
import { Event } from "@/types";

type CardEventParams = {
  event: Event;
};

export const CardEvent = ({ event }: CardEventParams) => {
  return (
    <Link to={`/events/${event.slug}`}>
      <div
        key={event?.id}
        className="border rounded-lg overflow-hidden shadow-md"
      >
        <img
          src={event.imageUrl}
          alt="Event"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="h-14">
            <h4 className="text-lg font-bold">{event.name}</h4>
          </div>
          <Badge className="text-xs bg-j-green-dark my-2">
            {event.category.name}
          </Badge>
          <div className="flex items-center mt-2">
            <TimeIcon className="w-6 h-6 mr-2" />
            <p className="text-gray-600 text-sm">
              {dayjs(event?.dateTimeStart).format("ddd DD MMM YYYY, HH:MM") +
                "-" +
                dayjs(event?.dateTimeEnd).format("HH:MM")}
            </p>
          </div>
          <div className="flex items-center mt-2 h-10">
            <PlaceIcon className="w-6 h-6 mr-2" />
            <p className="text-gray-600 text-sm">{event?.venue?.name}</p>
          </div>
          <p className="text-gray-600 text-sm font-semibold mt-2">
            {`Kuota: ${event?.participants?.length} / ${event?.maxParticipants}`}
          </p>
        </div>
      </div>
    </Link>
  );
};
