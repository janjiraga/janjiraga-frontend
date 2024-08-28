import { useLoaderData } from "react-router-dom";
import { CardEvent } from "../components/events/card-event";
import { Categories } from "../components/home/categories";
import Hero from "../components/home/hero";
import CallToAction from "../components/home/call-to-action";

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

type Venue = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  zoomLevel: number;
};

type Event = {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  venue: Venue;
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

  return (
    <>
      <Hero />
      <Categories categoriesData={categories.data} />
      <div>
        <h1 className="text-3xl text-j-gray-dark font-semibold mb-10">
          Event Terbaru
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events?.data?.map((event: Event) => (
            <CardEvent key={event?.id} event={event} />
          ))}
        </div>
      </div>
      <CallToAction />
    </>
  );
}
