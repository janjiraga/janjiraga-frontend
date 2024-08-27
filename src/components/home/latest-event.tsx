import { CardEvent } from "../events/card-event";
import { Event } from "../../types";

type LatestEventParams = {
  events: {
    data: Event[];
  };
};

export default function LatestEvent({ events }: LatestEventParams) {
  return (
    <div>
      <h1 className="text-3xl text-j-gray-dark font-semibold mb-10">
        Event Terbaru
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events?.data?.map((event) => (
          <CardEvent key={event?.id} event={event} />
        ))}
      </div>
    </div>
  );
}
