import React from "react";
import { badmintonIcon, soccerIcon, volyIcon, gymIcon, pingpongIcon, runIcon, basketIcon } from "../components/ui/shared/icon";

const iconsArray = [
  { name: "Badminton", component: badmintonIcon },
  {
    name: "Sepak bola",
    component: soccerIcon,
  },
  {
    name: "Futsal",
    component: soccerIcon,
  },
  {
    name: "Lari",
    component: runIcon,
  },
  {
    name: "Gym",
    component: gymIcon,
  },
  {
    name: "Voli",
    component: volyIcon,
  },
  {
    name: "Basket",
    component: basketIcon,
  },
  {
    name: "Tenis meja",
    component: pingpongIcon,
  },
];

export function Categories() {
  const CategoryCard = ({ icon: Icon, name }: { icon: React.FC<React.SVGProps<SVGSVGElement>>; name: string }) => {
    return (
      <div>
        <Icon />
        <h2>{name}</h2>
      </div>
    );
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {iconsArray.map((iconData, indexIcon) => (
          <CategoryCard key={indexIcon} icon={iconData.component} name={iconData.name} />
        ))}
      </div>
    </>
  );
}
