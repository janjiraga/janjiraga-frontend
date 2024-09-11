import { useEffect, useState } from "react";
import DashboardCard from "@/components/dashboard/dashboard-card";
import EmptyAppointment from "@/components/dashboard/empty-appointment";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useSearchParams } from "react-router-dom";

export function DashboardRoute() {
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
  }, [queryTab]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dasbor</h1>
      <Tabs value={tab} onValueChange={onTabChange}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="appointment">Janji Mabar</TabsTrigger>
          <TabsTrigger value="my-event">Mabar Buatanku</TabsTrigger>
        </TabsList>
        <TabsContent value="appointment">
          <h2 className="text-lg font-semibold my-4">
            Janji main bareng yang akan kamu ikuti
          </h2>
          <EmptyAppointment title="Belum ada janji mabar" tab="appointment" />
          <div className="mt-8 flex flex-col gap-4">
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
          </div>
        </TabsContent>
        <TabsContent value="my-event">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold my-4">
              Event main bareng yang kamu buat
            </h2>
            <div className="my-4">
              <Button className="bg-j-green-dark hover:bg-j-green-darker">
                <Link to={"/new-event"}>Buat Mabar</Link>
              </Button>
            </div>
          </div>
          <EmptyAppointment
            title="Belum ada mabar yang kamu buat"
            tab="my-event"
          />
          <div className="mt-8 flex flex-col gap-4">
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
