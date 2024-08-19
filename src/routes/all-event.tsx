import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CardEvent } from "../components/events/card-event";

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

  const [date, setDate] = React.useState<Date>();

  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/events");
  };
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
              <CardEvent event={event} />
            ))}
          </div>
        </div>
        <Button className="w-full my-4" onClick={handleSeeMore}>
          Selengkapnya
        </Button>
      </div>
    </>
  );
}
