import { useForm, Controller } from "react-hook-form";
import { Form, Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const createEventSchema = z.object({
  name: z.string().min(5),
  price: z.string().regex(/^[0-9]*$/),
  imageUrl: z.string().url(),
  description: z.string().min(5),
  maxParticipants: z.string(),
  dateTimeStart: z.coerce.date(),
  dateTimeEnd: z.coerce.date(),
  categoryId: z.string(),
  venueId: z.string(),
});

export default function NewEvent() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      name: "",
      price: "",
      imageUrl: "",
      description: "",
      maxParticipants: "",
      dateTimeStart: new Date(),
      dateTimeEnd: new Date(),
      categoryId: "",
      venueId: "",
    },
  });

  const onSubmit = (data) => {
    const timeStartIso = new Date(data.dateTimeStart).toISOString();
    const timeEndIso = new Date(data.dateTimeEnd).toISOString();
    const payload = {
      ...data,
      dateTimeStart: timeStartIso,
      dateTimeEnd: timeEndIso,
    };

    console.log(payload, "payload");
  };

  return (
    <>
      <h2 className="text-3xl text-j-gray-dark font-semibold mb-10">
        Buat Event Mabar Baru
      </h2>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="w-full flex flex-col gap-4 mb-20"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Nama Event
          </label>
          <Input id="name" {...register("name")} type="text" required />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name?.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="categoryId"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Kategori
          </label>
          <Controller
            control={control}
            name="categoryId"
            render={({ field }) => (
              <Select
                name="categoryId"
                value={field.value} // Handle single selection or use the first item of the array
                onValueChange={(value) => field.onChange(value)}
              >
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
            )}
          ></Controller>
          {errors.categoryId && (
            <span className="text-sm text-red-500">
              {errors.categoryId?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Url Gambar
          </label>
          <Input id="imageUrl" {...register("imageUrl")} type="text" required />
          {errors.imageUrl && (
            <span className="text-sm text-red-500">
              {errors.imageUrl?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Harga
          </label>
          <Input
            id="price"
            {...register("price", { min: 0 })}
            type="number"
            required
          />
          {errors.price && (
            <span className="text-sm text-red-500">
              {errors.price?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="maxParticipants"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Max Peserta
          </label>
          <Input
            id="maxParticipants"
            {...register("maxParticipants", { min: 2 })}
            type="number"
            required
          />
          {errors.maxParticipants && (
            <span className="text-sm text-red-500">
              {errors.maxParticipants?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="dateTimeStart"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Waktu Mulai
          </label>
          <Controller
            control={control}
            name="dateTimeStart"
            render={({ field }) => (
              <div className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 col-span-3">
                <DatePicker
                  wrapperClassName="w-full"
                  className="w-full"
                  selected={field.value}
                  onChange={field.onChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/YYYY HH:mm:ss"
                />
              </div>
            )}
          ></Controller>
          {errors.dateTimeStart && (
            <span className="text-sm text-red-500">
              {errors.dateTimeStart?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="dateTimeEnd"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Waktu Selesai
          </label>
          <Controller
            control={control}
            name="dateTimeEnd"
            render={({ field }) => (
              <div className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 col-span-3">
                <DatePicker
                  wrapperClassName="w-full"
                  className="w-full"
                  selected={field.value}
                  onChange={field.onChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/YYYY HH:mm:ss"
                />
              </div>
            )}
          ></Controller>
          {errors.dateTimeEnd && (
            <span className="text-sm text-red-500">
              {errors.dateTimeEnd?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="venueId"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Venue
          </label>
          <Controller
            control={control}
            name="venueId"
            render={({ field }) => (
              <Select
                name="venueId"
                value={field.value} // Handle single selection or use the first item of the array
                onValueChange={(value) => field.onChange(value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Pilih venue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="venue-1">Venue 1</SelectItem>
                    <SelectItem value="venue-2">Venue 2</SelectItem>
                    <SelectItem value="venue-3">Venue 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          ></Controller>
          {errors.venueId && (
            <span className="text-sm text-red-500">
              {errors.venueId?.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Deskripsi
          </label>
          <Textarea id="description" {...register("description")} />
          {errors.description && (
            <span className="text-sm text-red-500">
              {errors.description?.message}
            </span>
          )}
        </div>
        <div className="flex gap-5 mt-8">
          <Button
            className="w-full bg-j-green-dark hover:bg-j-green-darker"
            type="submit"
            // disabled={state === "submitting" || state === "loading"}
          >
            Buat Mabar
          </Button>
          <Link to={"/dashboard"} className="w-full">
            <Button className="w-full" type="button" variant="outline">
              Batal
            </Button>
          </Link>
        </div>
      </Form>
    </>
  );
}
