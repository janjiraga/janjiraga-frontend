import { EventRoute } from "./event";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export function EventsRoute() {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/events");
  };

  return (
    <div className="p-4 m-4">
      <h1 className="text-3xl font-bold mb-6">Event Terbaru</h1>
      <div>
        <EventRoute />
      </div>
      <Button className="w-full my-4" onClick={handleSeeMore}>
        Selengkapnya
      </Button>
    </div>
  );
}
