import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "../components/ui/input";
import { EventsRoute } from "./events";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

export function AllEventsRoute() {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <h1 className="font-bold">Event main Bareng</h1>
      <div className=" flex space-x-4 m-4">
        <div>
          <Input
            id="search"
            name="search"
            type="text"
            placeholder="Cari kata"
          />
        </div>
        <div>
          <Input
            id="choose"
            name="choose"
            type="text"
            placeholder="Pilih Olahraga"
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <div>
          <Button>Filter Event</Button>
        </div>
      </div>
      <h1 className="font-bold">Menemukan 20 event mabar</h1>
      <EventsRoute />
    </>
  );
}
