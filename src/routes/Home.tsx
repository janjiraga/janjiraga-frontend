import { SiteNavigation } from "../components/ui/shared/site-navigation";
import { Button } from "../components/ui/button";
import Basketball from "../assets/basketball.png";
import { Categories } from "./categories";

export function Home() {
  return (
    <>
      <div>
        <SiteNavigation />
      </div>
      <div className="flex mb-4  p-4">
        <div className="w-1/2 ">
          <h1 className=" font-extrabold text-2xl">Tempat dimana olahraga menjadi pemersatu</h1>
          <p className="m-4">Bergabunglah dan temukan teman baru untuk aktivitas olahraga yang lebih menyenangkan.</p>
          <Button variant="outline">Gabung</Button>
        </div>
        <div className="w-1/2">
          <img src={Basketball} alt="" className="max-w-full h-auto md:max-w-sm" />
        </div>
      </div>
      <div className="p-2 m-4">
        <Categories />
      </div>
    </>
  );
}
