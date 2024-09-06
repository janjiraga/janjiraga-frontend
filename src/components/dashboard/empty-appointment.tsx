type EmptyAppointmentParams = {
  title: string;
  description: string;
};

export default function EmptyAppointment({
  title,
  description,
}: EmptyAppointmentParams) {
  return (
    <div className="flex flex-col items-center justify-center h-64 border border-dashed border-gray-300 rounded-lg">
      <p className="text-gray-500 text-lg font-medium">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
