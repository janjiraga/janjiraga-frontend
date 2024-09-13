import { useLoaderData } from "react-router-dom";
import { Categories } from "../components/home/categories";
import Hero from "../components/home/hero";
import CallToAction from "../components/home/call-to-action";
import { EventsResponse } from "../types";
import Events from "../components/home/events";
import { authCookie } from "@/lib/auth";

const backendURL = import.meta.env.VITE_APP_API_BASEURL;

async function getEvents() {
  try {
    const response = await fetch(`${backendURL}/events`);
    const events = await response.json();

    return events as EventsResponse;
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

export function Home() {
  const { events, categories } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;
  const token = authCookie.get("token");

  return (
    <>
      <Hero token={token} />
      <Categories categoriesData={categories.data} />
      <Events events={events?.data} />
      <CallToAction token={token} />
    </>
  );
}
