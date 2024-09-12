import { useEffect, useState } from "react";
import DashboardCard from "@/components/dashboard/dashboard-card";
import EmptyAppointment from "@/components/dashboard/empty-appointment";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { authCookie } from "@/lib/auth";
import { Event, Participant, UserProfile as UserProfileType } from "@/types";

const backendURL = import.meta.env.VITE_APP_API_BASEURL;

type UserProfileResponse = {
  message: string;
  data: UserProfileType;
};

async function getUserProfile(token: string) {
  try {
    const response = await fetch(`${backendURL}/auth/my-profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const userProfile = await response.json();

    return userProfile;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function loader() {
  const token = authCookie.get("token");
  const userProfile = (await getUserProfile(token)) as UserProfileResponse;
  return { userProfile };
}

export function DashboardRoute() {
  const { userProfile } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const { events, participants } = userProfile.data;
  const [tab, setTab] = useState("appointment");
  const [searchParams, setSearchParams] = useSearchParams();
  const queryTab = searchParams.get("tab");

  const onTabChange = (value: string) => {
    setTab(value);
    setSearchParams({ tab: value });
  };

  useEffect(() => {
    if (queryTab) {
      setTab(queryTab);
    } else {
      setSearchParams({ tab: "appointment" });
    }
  }, [queryTab, setSearchParams]);

  return (
    <div className="min-h-96 pb-48 px-4 md:px-0">
      <h1 className="text-xl font-bold mb-4">Dasbor</h1>
      <Tabs value={tab} onValueChange={onTabChange}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="appointment">Janji Mabar</TabsTrigger>
          <TabsTrigger value="my-event">Mabar Buatanku</TabsTrigger>
        </TabsList>
        <TabsContent value="appointment">
          <h2 className="text-lg font-semibold my-6">
            Janji main bareng yang kamu ikuti
          </h2>
          {participants?.length === 0 ? (
            <EmptyAppointment title="Belum ada janji mabar" tab="appointment" />
          ) : (
            <div className="mt-8 flex flex-col gap-4">
              {participants?.map((appointment: Participant) => (
                <DashboardCard key={appointment.id} event={appointment.event} />
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="my-event">
          <div className="flex justify-between items-center my-6">
            <h2 className="text-lg font-semibold">
              Event main bareng yang kamu buat
            </h2>
            <div>
              <Button className="bg-j-green-dark hover:bg-j-green-darker">
                <Link to={"/new-event"}>Buat Mabar</Link>
              </Button>
            </div>
          </div>
          {events?.length === 0 ? (
            <EmptyAppointment
              title="Belum ada mabar yang kamu buat"
              tab="my-event"
            />
          ) : (
            <div className="mt-8 flex flex-col gap-4">
              {events?.map((myEvent: Event) => (
                <DashboardCard key={myEvent.id} event={myEvent} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
