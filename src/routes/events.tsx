import { EventRoute } from "./event";
import { Button } from "../components/ui/button";

export function EventsRoute() {
  return (
    <div className="p-4 m-4">
      <h1 className="text-3xl font-bold mb-6">Event Terbaru</h1>
      <div>
        <EventRoute />
      </div>
      <Button className=" w-full my-4">Selengkapnya</Button>
    </div>
  );
}
