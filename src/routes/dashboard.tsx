import * as React from "react";
import { format } from "date-fns";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "../components/ui/input";

export function DashboardRoute() {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Dasbor</h1>
      <div className="border-b border-gray-300 mb-4">
        <nav className="flex space-x-4">
          <a href="#">Main Bareng</a>
        </nav>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <Input type="text" placeholder="Cari mabar disini [EN]" className="p-2 border border-gray-300 rounded-md flex-grow" />
        <select className="p-2 border border-gray-300 rounded-md">
          <option>Semua Cabor</option>
          <option>Sepak Bola</option>
          <option>Futsal</option>
          <option>Gym</option>
          <option>Badminton</option>
          <option>Voli</option>
          <option>Tenis</option>
          <option>Lari</option>
        </select>
        <div>
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
        </div>
      </div>

      <div className="flex space-x-4 mb-8">
        <Button className=" border-gray-300 text-white px-4 py-2 rounded-md">Semua Status</Button>
        <Button className=" border-gray-300 text-white px-4 py-2 rounded-md">Bergabung</Button>
        <Button className=" border-gray-300 text-white px-4 py-2 rounded-md">Selesai</Button>
        <Button className=" border-gray-300 text-white px-4 py-2 rounded-md">Dibatalkan</Button>
      </div>

      <div className="flex flex-col items-center justify-center h-64 border border-dashed border-gray-300 rounded-lg">
        <p className="text-gray-500 text-lg font-medium">Belum ada Main bareng</p>
        <p className="text-gray-400">Main bareng yang kamu buat atau ikuti akan muncul disini, ya.</p>
      </div>
    </div>
  );
}
