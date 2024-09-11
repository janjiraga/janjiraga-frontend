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
import { useNavigate, useNavigation } from "react-router-dom";

export default function ModalJoinEvent() {
  const { state } = useNavigation();
  const navigate = useNavigate();

  const onSubmit = async () => {
    navigate("/dashboard?tab=appointment");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full mt-8 bg-j-green-dark hover:bg-j-green-darker"
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
