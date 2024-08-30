import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { PlaceIcon, TimeIcon } from "@/components/ui/shared/icon";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { rupiahFormat } from "@/lib/helpers";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DetailEventRoute() {
  return (
    <>
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
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPXIjnm1txU40MU3fK3rnRM1yQf9d9OWA_SMTVc=s680-w680-h510"
          alt="fun badminton"
          className="col-span-12 lg:col-span-6"
        />
        <div className="col-span-12 lg:col-start-8 lg:col-end-13">
          <div>
            <h1 className="font-bold font-poppins text-2xl md:text-4xl text-b-black">
              Main bola bareng pemain Persib Bandung
            </h1>
            <p className="font-sans text-lg mt-3">
              Diselenggarakan oleh <b>John Doe</b>
            </p>
            <p className="mt-6 font-semibold font-poppins text-2xl md:text-3xl text-b-black">
              {rupiahFormat(100000)}
            </p>
            <p className="font-sans text-lg text-red-400 mt-2">
              Hanya tersisa 3 spot!
            </p>
            <div className="flex items-center mt-6">
              <TimeIcon className="w-6 h-6 mr-2" />
              <p className="text-gray-600 text-sm">
                {dayjs("2024-08-31T07:00:00.000Z").format(
                  "ddd DD MMM YYYY, HH:MM"
                ) +
                  "-" +
                  dayjs("2024-08-31T09:00:00.000Z").format("HH:MM")}
              </p>
            </div>
            <div className="flex items-center mt-3 h-10">
              <PlaceIcon className="w-6 h-6 mr-2" />
              <p className="text-gray-600 text-sm">
                Gelora Bandung Lautan Api Stadium
              </p>
            </div>
            <Button className="w-full mt-8 bg-j-green-dark hover:bg-j-green-darker">
              Ikut Mabar
            </Button>
          </div>
          <div className="mt-6">
            <p className="md:text-lg font-poppins">Share</p>
            <ul className="flex gap-2 mt-3 text-5xl">
              <li>
                <a
                  href={`https://twitter.com/share?url=https://janjiraga.com/events/trofeo-persib-g3BcQ3`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter />
                </a>
              </li>
              <li>
                <a
                  href={`http://facebook.com/share.php?u=https://janjiraga.com/events/trofeo-persib-g3BcQ3`}
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
          <Accordion
            type="multiple"
            className="w-full font-plus text-lg"
            defaultValue={["item-1", "item-2", "item-3"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Deskripsi</AccordionTrigger>
              <AccordionContent>No overview information</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Lokasi</AccordionTrigger>
              <AccordionContent>"No materials information"</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Peserta</AccordionTrigger>
              <AccordionContent>"No materials information"</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
