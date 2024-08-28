import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <div className="flex items-center bg-j-green-lighter mt-28 mb-52 p-10 rounded-2xl">
      <div className="w-1/2 ">
        <img
          src="https://ucarecdn.com/089a8bac-8176-4d7d-a419-cac858c35bd9/172DiversityInclusionRevision.png"
          alt="diversity people"
        />
      </div>
      <div className="w-1/2 font-poppins">
        <h2 className="font-medium text-3xl text-j-gray-dark mb-10">
          Temukan kawan mainmu sekarang!
        </h2>
        <p className="text-xl text-j-gray-light mb-14">
          Banyak kawan sudah menantimu di gelanggang, yuk gabung Janjiraga
          sekarang juga!
        </p>
        <Button className="w-40 bg-j-green-dark hover:bg-j-green-darker">
          Gabung
        </Button>
      </div>
    </div>
  );
}
