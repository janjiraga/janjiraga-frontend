import { Link } from "react-router-dom";
import { Event } from "../../types";
import { CardEvent } from "../events/card-event";
import { Button } from "../ui/button";

type EventsParams = {
  events: Event[];
};

export default function Events({ events }: EventsParams) {
  return (
    <div className="p-4 lg:p-0">
      <h2 className="text-3xl text-j-gray-dark font-semibold mb-10">
        Event Terbaru
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events?.map((event: Event) => (
          <CardEvent key={event?.id} event={event} />
        ))}
      </div>
      <Link to={"/events"}>
        <Button className="w-full mt-12 bg-j-green-dark hover:bg-j-green-darker">
          Selengkapnya
        </Button>
      </Link>
    </div>
  );
}
