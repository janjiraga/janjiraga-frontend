import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { authCookie } from "@/lib/auth";
import { toast } from "react-toastify";
import { useNavigation, useNavigate } from "react-router-dom";
import { Participant } from "@/types";

type JoinEventResponseType = {
  code: number;
  status: string;
  newEvent: Participant;
};

type ModalJoinEventParams = {
  eventId: string;
};

export default function ModalJoinEvent({ eventId }: ModalJoinEventParams) {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const token = authCookie.get("token");
  const userProfile = JSON.parse(localStorage.getItem("userProfile")!);
  const backendURL = import.meta.env.VITE_APP_API_BASEURL;

  const onSubmit = async () => {
    try {
      if (token) {
        const payload = {
          eventId,
          userId: userProfile?.id,
          isPaid: false,
        };
        const response = await fetch(`${backendURL}/participants`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const joinEventResponse: JoinEventResponseType = await response.json();

        if (joinEventResponse.status === "success") {
          toast.success("Berhasil ikut mabar");
          return navigate("/dashboard?tab=appointment");
        }
      } else {
        return navigate("/login");
      }
    } catch (e) {
      toast.error("Terjadi error");
      console.error(e);
      throw e;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full mt-4 bg-j-green-dark hover:bg-j-green-darker"
          disabled={state === "submitting" || state === "loading"}
        >
          Ikut Mabar
        </Button>
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Ikut Mabar</DialogTitle>
          <DialogDescription>
            Apakah kamu yakin akan mengikuti mabar ini?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant={"outline"}
              type={"button"}
              disabled={state === "submitting" || state === "loading"}
            >
              Batal
            </Button>
          </DialogClose>
          <Button
            type={"button"}
            onClick={onSubmit}
            className="bg-j-green-dark hover:bg-j-green-darker"
            disabled={state === "submitting" || state === "loading"}
          >
            Ikut Mabar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
