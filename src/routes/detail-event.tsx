import { useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PlaceIcon, TimeIcon } from "@/components/ui/shared/icon";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { rupiahFormat } from "@/lib/helpers";
import dayjs from "dayjs";
import { Link, Params, useLoaderData, useSearchParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OthersEvent from "@/components/detail-event/others-event";
import { MapBox } from "@/components/detail-event/map-box";
import { EventsResponse, DetailEventResponse, Event } from "@/types";
import ModalJoinEvent from "@/components/detail-event/modal-join-event";

const backendURL = import.meta.env.VITE_APP_API_BASEURL;

async function getEventDetail(slug: string) {
  try {
    const response = await fetch(`${backendURL}/events/${slug}`);
    const detailEvent = await response.json();

    return detailEvent as DetailEventResponse;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function getOtherEvents() {
  try {
    const response = await fetch(`${backendURL}/events`);
    const events = await response.json();

    return events as EventsResponse;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function loader({ params }: { params: Params }) {
  const slug = params.slug!;

  const [detailEvent, events] = await Promise.all([
    getEventDetail(slug),
    getOtherEvents(),
  ]);

  return { detailEvent, events };
}

export function DetailEventRoute() {
  const [searchParams] = useSearchParams();
  const slugParams = searchParams.get("slug");
  const { detailEvent, events } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  const {
    name,
    description,
    imageUrl,
    dateTimeStart,
    dateTimeEnd,
    price,
    slug,
    user,
    venue,
  } = detailEvent.data;

  const filteredEvents = useMemo(() => {
    const filtered = events.data
      .filter((event: Event) => event.slug !== slugParams)
      .slice(0, 4);

    return filtered;
  }, [events, slugParams]);

  return (
    <div className="p-4 md:p-0">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link className="underline" to="/">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link className="underline" to="/events">
              Main Bareng
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-plus">
              Main bola bareng pemain Persib Bandung
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-10 grid gap-x-4 gap-y-6 grid-cols-12">
        <img src={imageUrl} alt={name} className="col-span-12 lg:col-span-6" />
        <div className="col-span-12 lg:col-start-8 lg:col-end-13">
          <div>
            <h1 className="font-bold font-poppins text-2xl md:text-4xl text-b-black">
              {name}
            </h1>
            <p className="font-sans text-lg mt-3">
              Diselenggarakan oleh <b>{`${user.firstName} ${user.lastName}`}</b>
            </p>
            <p className="mt-6 font-semibold font-poppins text-2xl md:text-3xl text-b-black">
              {rupiahFormat(price)}
            </p>
            <p className="font-sans text-lg text-red-400 mt-2">
              Hanya tersisa 3 spot!
            </p>
            <div className="flex items-center mt-6">
              <TimeIcon className="w-6 h-6 mr-2" />
              <p className="text-gray-600 text-sm">
                {dayjs(dateTimeStart).format("ddd DD MMM YYYY, HH:MM") +
                  "-" +
                  dayjs(dateTimeEnd).format("HH:MM")}
              </p>
            </div>
            <div className="flex items-center mt-3 h-10">
              <PlaceIcon className="w-6 h-6 mr-2" />
              <p className="text-gray-600 text-sm">{venue.name}</p>
            </div>
            <ModalJoinEvent />
          </div>
          <div className="mt-6">
            <p className="md:text-lg font-poppins">Share</p>
            <ul className="flex gap-2 mt-3 text-5xl">
              <li>
                <a
                  href={`https://twitter.com/share?url=https://janjiraga.com/events/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter />
                </a>
              </li>
              <li>
                <a
                  href={`http://facebook.com/share.php?u=https://janjiraga.com/events/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="mb-6">
            <h2 className="font-semibold font-poppins text-2xl mb-2">
              Deskripsi
            </h2>
            <p className="font-plus">{description}</p>
          </div>
          <div className="mb-6">
            <h2 className="font-semibold font-poppins text-2xl mb-2">Lokasi</h2>
            <p className="font-plus mb-4">{venue.address}</p>
            <MapBox venue={venue} />
          </div>
          <div className="mb-6">
            <h2 className="font-semibold font-poppins text-2xl mb-2">
              Peserta
            </h2>
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/9.x/thumbs/svg?seed=buigun" />
                <AvatarFallback>BG</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/9.x/thumbs/svg?seed=budiigunawan" />
                <AvatarFallback>IG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      <OthersEvent events={filteredEvents} />
    </div>
  );
}
