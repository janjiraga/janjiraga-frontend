import { PlaceIcon, TimeIcon } from "../components/ui/shared/icon";

export function EventRoute() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-md">
          <img src="https://jebreeetmedia.com/wp-content/uploads/2024/02/United-copenhagen-61.png" alt="Event" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">Fun Weekend Badminton</h2>
            <p className="bg-green-100 text-green-700 inline-block px-2 py-1 rounded mt-2">Badminton</p>
            <div className="flex items-center mt-2">
              <TimeIcon className="w-6 h-6 mr-2" />
              <p className="text-gray-600">Sab, 10 Agt 2024, 20:00 - 22:00</p>
            </div>
            <div className="flex items-center mt-2">
              <PlaceIcon className="w-6 h-6 mr-2" />
              <p className="text-gray-600">Gor Badminton Cipondoh, Kota Tangerang</p>
            </div>
            <p className="text-gray-600 mt-2">Kuota: 8/10</p>
          </div>
        </div>
      ))}
    </div>
  );
}
