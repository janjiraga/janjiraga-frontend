import { Button } from "../components/ui/button";
import Basketball from "../assets/basketball.png";
import TeamDiversity from "../assets/team-diversity.png";
import { useLoaderData } from "react-router-dom";
import { CardEvent } from "../components/events/card-event";
import { Categories } from "../components/home/categories";

const backendURL = import.meta.env.VITE_APP_API_BASEURL;

async function getEvents() {
  try {
    const response = await fetch(`${backendURL}/events`);
    const events = await response.json();

    return events;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function getCategories() {
  try {
    const response = await fetch(`${backendURL}/categories`);
    const categories = await response.json();

    return categories;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function loader() {
  const [events, categories] = await Promise.all([
    getEvents(),
    getCategories(),
  ]);

  return { events, categories };
}

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
export function Home() {
  const { events, categories } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;
  console.log(categories, "this is categories");
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

      <Categories categoriesData={categories.data} />
      <div>
        <h1 className="text-3xl font-bold mb-6">Event Terbaru</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events?.data?.map((event: Event) => (
            <CardEvent event={event} />
          ))}
        </div>
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
