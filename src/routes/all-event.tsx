import { Button } from "../components/ui/button";
import { Link, useLoaderData } from "react-router-dom";
import { CardEvent } from "../components/events/card-event";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { EventsResponse } from "../types";

export async function loader() {
  const backendURL = import.meta.env.VITE_APP_API_BASEURL;

  const response = await fetch(`${backendURL}/events`);

  const events = (await response.json()) as EventsResponse;

  return { events };
}

export function AllEventsRoute() {
  const { events } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Main Bareng</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl text-j-gray-dark font-semibold mb-8">
        Event Main Bareng
      </h1>

      <p className="font-poppins text-lg mb-6">{`Menemukan ${events?.data?.length} events mabar`}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {events?.data?.map((event) => (
          <CardEvent event={event} />
        ))}
      </div>

      <Button className="w-full mb-32 bg-j-green-dark hover:bg-j-green-darker">
        Lihat lebih banyak
      </Button>
    </>
  );
}
