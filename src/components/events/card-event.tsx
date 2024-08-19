import { PlaceIcon, TimeIcon } from "../ui/shared/icon";

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

type CardEventParams = {
  event: Event;
};

export const CardEvent = ({ event }: CardEventParams) => {
  return (
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
  );
};
