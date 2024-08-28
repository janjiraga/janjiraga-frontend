import { Link } from "react-router-dom";
import { PlaceIcon, TimeIcon } from "../ui/shared/icon";
import dayjs from "dayjs";
import { Badge } from "../ui/badge";

type Category = {
  id: string;
  name: string;
};

type Venue = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  zoomLevel: number;
};

type Event = {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  venue: Venue;
  maxParticipants: number;
  dateTimeStart: string; // ISO date string
  dateTimeEnd: string; // ISO date string
  categoryId: string;
  userId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  category: Category;
};

type CardEventParams = {
  event: Event;
};

export const CardEvent = ({ event }: CardEventParams) => {
  return (
    <Link to={`/events/${event.slug}`}>
      <div
        key={event?.id}
        className="border rounded-lg overflow-hidden shadow-md h-[420px]"
      >
        <img
          src={event.imageUrl}
          alt="Event"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="h-10">
            <h2 className="text-xl font-bold">{event.name}</h2>
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
            Kuota: 8/10
          </p>
        </div>
      </div>
    </Link>
  );
};
