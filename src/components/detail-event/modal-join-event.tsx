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
import { useNavigate, useNavigation } from "react-router-dom";

export default function ModalJoinEvent() {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const token = authCookie.get("token");

  const onSubmit = async () => {
    if (token) {
      navigate("/dashboard?tab=appointment");
    } else {
      navigate("/login");
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
