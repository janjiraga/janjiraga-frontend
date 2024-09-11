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
import { useNavigation } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(5),
  price: z.string(),
  imageUrl: z.string().url(),
  description: z.string().min(5),
  maxParticipants: z.string(),
  dateTimeStart: z.string().datetime(),
  dateTimeEnd: z.string().datetime(),
  categoryId: z.string(),
  venueId: z.string(),
  // userId: z.string().openapi({ example: "cm0afvp7k0000ofg4gph6il5r" }),
});

export default function ModalCreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { state } = useNavigation();

  const onSubmit = async (data: unknown) => {
    console.log(data, "data");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-j-green-dark hover:bg-j-green-darker"
          disabled={state === "submitting" || state === "loading"}
        >
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
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nama Event
            </Label>
            <Input
              id="name"
              {...register("name")}
              className="col-span-3"
              required
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Kategori
            </Label>
            <Select {...register("categoryId")} required>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
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
            {errors.categoryId && (
              <span className="text-sm text-red-500">
                {errors.categoryId?.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Venue
            </Label>
            <Select {...register("venueId")} required>
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
            {errors.venueId && (
              <span className="text-sm text-red-500">
                {errors.venueId?.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dateTimeStart" className="text-right">
              Waktu Mulai
            </Label>
            <Input
              id="dateTimeStart"
              {...register("dateTimeStart")}
              className="col-span-3"
              type="datetime-local"
              required
            />
            {errors.dateTimeStart && (
              <span className="text-sm text-red-500">
                {errors.dateTimeStart?.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dateTimeEnd" className="text-right">
              Waktu Berakhir
            </Label>
            <Input
              id="dateTimeEnd"
              {...register("dateTimeEnd")}
              className="col-span-3"
              type="datetime-local"
              required
            />
            {errors.dateTimeEnd && (
              <span className="text-sm text-red-500">
                {errors.dateTimeEnd?.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="imageUrl" className="text-right">
              Url Gambar
            </Label>
            <Input
              id="imageUrl"
              {...register("imageUrl")}
              className="col-span-3"
              required
            />
            {errors.imageUrl && (
              <span className="text-sm text-red-500">
                {errors.imageUrl?.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              {...register("price", {
                min: 0,
              })}
              type="number"
              className="col-span-3"
              required
            />
            {errors.price && (
              <span className="text-sm text-red-500">
                {errors.price?.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="maxParticipants" className="text-right">
              Peserta Maximal
            </Label>
            <Input
              id="maxParticipants"
              {...register("maxParticipants", { min: 2 })}
              type="number"
              className="col-span-3"
              required
            />
            {errors.maxParticipants && (
              <span className="text-sm text-red-500">
                {errors.maxParticipants?.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Deskripsi
            </Label>
            <Input
              id="description"
              {...register("description")}
              className="col-span-3"
              required
            />
            {errors.description && (
              <span className="text-sm text-red-500">
                {errors.description?.message}
              </span>
            )}
          </div>
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
              type={"submit"}
              className="bg-j-green-dark hover:bg-j-green-darker"
              disabled={state === "submitting" || state === "loading"}
            >
              Simpan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
