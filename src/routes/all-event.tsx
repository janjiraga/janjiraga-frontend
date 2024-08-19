import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "../components/ui/input";
import { EventsRoute } from "./events";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { useLoaderData } from "react-router-dom";
import { PlaceIcon, TimeIcon } from "../components/ui/shared/icon";

export async function loader() {
  const backendURL = import.meta.env.VITE_APP_API_BASEURL;

  const response = await fetch(`${backendURL}/events`);

  const events = await response.json();

  return { events };
}

type Category = {
  id: string;
  name: string;
};

type Event = {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  venueName: string;
  venueAddress: string;
  latitude: number;
  longitude: number;
  zoomLevel: number;
  maxParticipants: number;
  dateTimeStart: string; // ISO date string
  dateTimeEnd: string; // ISO date string
  categoryId: string;
  userId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  category: Category;
};

export function AllEventsRoute() {
  const { events } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  console.log(events?.data);
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <h1 className="font-bold">Event main Bareng</h1>
      <div className=" flex space-x-4 m-4">
        <div>
          <Input id="search" name="search" type="text" placeholder="Cari kata" />
        </div>
        <div>
          <Input id="choose" name="choose" type="text" placeholder="Pilih Olahraga" />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
        <div>
          <Button>Filter Event</Button>
        </div>
      </div>
      <h1 className="font-bold">Menemukan 20 event mabar</h1>
      <div className="p-4 m-4">
        <h1 className="text-3xl font-bold mb-6">Event Terbaru</h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {events?.data?.map((event: Event) => (
              <div key={event?.id} className="border rounded-lg overflow-hidden shadow-md">
                <img src={event.imageUrl} alt="Event" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{event.name}</h2>
                  <p className="bg-green-100 text-green-700 inline-block px-2 py-1 rounded mt-2">{event.category.name}</p>
                  <div className="flex items-center mt-2">
                    <TimeIcon className="w-6 h-6 mr-2" />
                    <p className="text-gray-600">{event.dateTimeStart}</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <PlaceIcon className="w-6 h-6 mr-2" />
                    <p className="text-gray-600">{event.venueName}</p>
                  </div>
                  <p className="text-gray-600 mt-2">Kuota: 8/10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className="w-full my-4">Selengkapnya</Button>
      </div>
    </>
  );
}
