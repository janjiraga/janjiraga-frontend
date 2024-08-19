import { Button } from "../components/ui/button";
import Basketball from "../assets/basketball.png";
import TeamDiversity from "../assets/team-diversity.png";
import { Categories } from "./categories";
import { EventsRoute } from "./events";

export function Home() {
  return (
    <>
      <div className="flex mb-4 p-4">
        <div className="w-1/2 ">
          <h1 className=" font-extrabold text-2xl">
            Tempat dimana olahraga menjadi pemersatu
          </h1>
          <p className="m-4">
            Bergabunglah dan temukan teman baru untuk aktivitas olahraga yang
            lebih menyenangkan.
          </p>
          <Button variant="outline">Gabung</Button>
        </div>
        <div className="w-1/2">
          <img
            src={Basketball}
            alt=""
            className="max-w-full h-auto md:max-w-sm"
          />
        </div>
      </div>
      <div className="p-2 m-4">
        <Categories />
      </div>
      <div>
        <EventsRoute />
      </div>
      <div className="flex mb-4 p-4">
        <div className="w-1/2 ">
          <img src={TeamDiversity} alt="" />
        </div>
        <div className="w-1/2 ">
          <h1 className=" font-extrabold text-2xl justify-center">
            {" "}
            Temukan kawan mainmu sekarang!
          </h1>
          <p className="justify-center">
            Banyak kawan sudah menantimu di gelanggang, yuk gabung Janjiraga
            sekarang juga!
          </p>
          <Button className=" mb-2">Gabung</Button>
        </div>
      </div>
    </>
  );
}
