import { SiteNavigation } from "./site-navigation";
import { Footer } from "./footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

export function Layout() {
  return (
    <>
      <SiteNavigation />
      <main className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto lg:min-h-[824px] min-h-[700px] pt-28">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
