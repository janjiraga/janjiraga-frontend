import { Button } from "../components/ui/button";
import { Form, Link, useLoaderData, useSearchParams } from "react-router-dom";
import { CardEvent } from "../components/events/card-event";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { EventsResponse } from "../types";
import { sanitizeQuery } from "../lib/helpers";
import { useState } from "react";

type LoaderParams = {
  request: Request;
};

export async function loader({ request }: LoaderParams) {
  const backendURL = import.meta.env.VITE_APP_API_BASEURL;
  const frontendURL = new URL(request.url);
  const page = frontendURL.searchParams.get("page");
  const limit = frontendURL.searchParams.get("limit");
  const q = frontendURL.searchParams.get("q");

  const payload = {
    page: page ?? "1",
    limit: limit ?? "16",
    q: q ?? "",
  };

  const sanitizedPayload = sanitizeQuery(payload);

  const response = await fetch(
    `${backendURL}/events?` + new URLSearchParams(sanitizedPayload)
  );

  const events = (await response.json()) as EventsResponse;

  return { events };
}

export function AllEventsRoute() {
  const [limit, setLimit] = useState(12);
  const { events } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("q");

  const handleViewMore = () => {
    setLimit((limit) => limit + 12);
  };

  return (
    <div className="p-4 md:p-0">
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link className="underline" to={"/"}>
              Home
            </Link>
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

      <p className="font-poppins text-lg mb-6">{`Menampilkan ${
        events?.data?.length
      } events mabar ${querySearch ? "untuk " + querySearch : ""}`}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {events?.data?.map((event) => (
          <CardEvent key={event.id} event={event} />
        ))}
      </div>

      <Form>
        <input
          name="limit"
          type="number"
          className="hidden"
          value={limit}
          onChange={handleViewMore}
        />
        <Button
          type="submit"
          className="w-full mb-32 bg-j-green-dark hover:bg-j-green-darker"
          onClick={handleViewMore}
          disabled
        >
          Lihat lebih banyak
        </Button>
      </Form>
    </div>
  );
}
