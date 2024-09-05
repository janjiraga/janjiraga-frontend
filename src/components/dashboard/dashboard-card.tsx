import { Button } from "../ui/button";

function DashboardCard() {
  return (
    <div className="flex items-center justify-between p-4 border border-solid border-gray-300 rounded-lg">
      <div>
        <p>Fun Badminton</p>
        <p>Badminton | Minggu, 11 Agustus 2024 | Gor Badminton Cipondoh</p>
      </div>
      <Button
        variant="ghost"
        className="text-j-green-dark hover:bg-j-green-dark hover:text-white"
      >
        Lihat Detail
      </Button>
    </div>
  );
}

export default DashboardCard;
