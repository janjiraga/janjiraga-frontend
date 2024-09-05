import DashboardCard from "@/components/dashboard/dashboard-card";
import EmptyAppointment from "@/components/dashboard/empty-appointment";
import ModalCreateEvent from "@/components/dashboard/modal-create-event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DashboardRoute() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Dasbor</h1>
      <Tabs defaultValue="appointment">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="appointment">Janji Mabar</TabsTrigger>
          <TabsTrigger value="my-event">Mabar Buatanku</TabsTrigger>
        </TabsList>
        <TabsContent value="appointment">
          <EmptyAppointment
            title="Belum ada janji mabar"
            description="Janji main bareng yang akan kamu ikuti."
          />
          <div className="mt-8 flex flex-col gap-4">
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
          </div>
        </TabsContent>
        <TabsContent value="my-event">
          <EmptyAppointment
            title="Belum ada mabar buatanmu"
            description="Event main bareng yang kamu buat."
          />
          <div className="mt-4">
            <ModalCreateEvent />
          </div>
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
