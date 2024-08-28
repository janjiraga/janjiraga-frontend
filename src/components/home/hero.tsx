import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex items-center">
      <div className="font-poppins">
        <h1 className="font-medium text-4xl text-j-gray-dark">
          Tempat dimana olahraga menjadi pemersatu
        </h1>
        <p className="text-xl text-j-gray-light mt-12 mb-14 max-w-sm">
          Bergabunglah dan temukan teman baru untuk aktivitas olahraga yang
          lebih menyenangkan.
        </p>
        <Button className="w-40 bg-j-green-dark hover:bg-j-green-darker">
          Gabung
        </Button>
      </div>
      <div className="w-full">
        <img
          src={
            "https://ucarecdn.com/d428de18-7ad4-4158-901a-a299f240a8f5/-/preview/"
          }
          alt="boys playing basketball"
        />
      </div>
    </div>
  );
}
