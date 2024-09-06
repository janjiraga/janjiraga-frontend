import { CardEvent } from "../events/card-event";
import { Event } from "@/types";

type EventsParams = {
  events: Event[] | [];
};

export default function OthersEvent({ events }: EventsParams) {
  return (
    <>
      <h2 className="text-3xl text-j-gray-dark font-semibold mb-10">
        Main Bareng Lainnya
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events?.map((event: Event) => (
          <CardEvent key={event?.id} event={event} />
        ))}
      </div>
    </>
  );
}
