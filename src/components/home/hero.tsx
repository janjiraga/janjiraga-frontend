import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-10 p-4 lg:p-0">
      <div className="font-poppins order-2 lg:order-1 text-center lg:text-left">
        <h1 className="font-medium text-4xl text-j-gray-dark">
          Tempat dimana olahraga menjadi pemersatu
        </h1>
        <p className="text-xl text-j-gray-light mt-12 mb-14 ">
          Bergabunglah dan temukan teman baru untuk aktivitas olahraga yang
          lebih menyenangkan.
        </p>
        <Link to={"/events"}>
          <Button className="w-40 bg-j-green-dark hover:bg-j-green-darker">
            Gabung
          </Button>
        </Link>
      </div>
      <div className="w-full order-1 lg:order-2">
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
