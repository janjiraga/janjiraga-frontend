import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type EmptyAppointmentParams = {
  title: string;
  tab: string;
};

export default function EmptyAppointment({
  title,
  tab,
}: EmptyAppointmentParams) {
  return (
    <div className="min-h-96 flex flex-col items-center justify-center h-64 border border-dashed border-gray-300 rounded-lg">
      <p className="text-gray-500 text-lg font-medium">{title}</p>
      <Button className="bg-j-green-dark hover:bg-j-green-darker mt-4">
        <Link to={tab === "appointment" ? "/events" : "/new-event"}>
          {tab === "appointment" ? "Ikut Mabar" : "Buat Mabar"}
        </Link>
      </Button>
    </div>
  );
}
