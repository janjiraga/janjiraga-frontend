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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ModalCreateEvent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-j-green-dark hover:bg-j-green-darker">
          Buat Mabar
        </Button>
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Buat Mabar</DialogTitle>
          <DialogDescription>
            Buat mabar baru disini. Klik simpan saat sudah selesai.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nama Event
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Kategori
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Pilih kategori</SelectLabel>
                  <SelectItem value="futsal">Futsal</SelectItem>
                  <SelectItem value="sepak-bola">Sepak Bola</SelectItem>
                  <SelectItem value="bulu-tangkis">Bulu Tangkis</SelectItem>
                  <SelectItem value="lari">Lari</SelectItem>
                  <SelectItem value="gym">Gym</SelectItem>
                  <SelectItem value="bola-voli">Bola Voli</SelectItem>
                  <SelectItem value="bola-basket">Bola Basket</SelectItem>
                  <SelectItem value="tenis">Tenis</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Venue
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Pilih venue" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Pilih venue</SelectLabel>
                  <SelectItem value="futsal">Futsal</SelectItem>
                  <SelectItem value="sepak-bola">Sepak Bola</SelectItem>
                  <SelectItem value="bulu-tangkis">Bulu Tangkis</SelectItem>
                  <SelectItem value="lari">Lari</SelectItem>
                  <SelectItem value="gym">Gym</SelectItem>
                  <SelectItem value="bola-voli">Bola Voli</SelectItem>
                  <SelectItem value="bola-basket">Bola Basket</SelectItem>
                  <SelectItem value="tenis">Tenis</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Waktu Mulai
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
              type="datetime-local"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Waktu Berakhir
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
              type="datetime-local"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Deskripsi
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"} type={"button"}>
              Batal
            </Button>
          </DialogClose>
          <Button
            type={"submit"}
            className="bg-j-green-dark hover:bg-j-green-darker"
          >
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
