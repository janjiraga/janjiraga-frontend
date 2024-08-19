import React from "react";
import {
  BadmintonIcon,
  SoccerIcon,
  VolleyIcon,
  GymIcon,
  PingpongIcon,
  RunIcon,
  BasketIcon,
} from "../components/ui/shared/icon";

const iconsArray = [
  { name: "Badminton", component: BadmintonIcon },
  {
    name: "Sepak bola",
    component: SoccerIcon,
  },
  {
    name: "Futsal",
    component: SoccerIcon,
  },
  {
    name: "Lari",
    component: RunIcon,
  },
  {
    name: "Gym",
    component: GymIcon,
  },
  {
    name: "Voli",
    component: VolleyIcon,
  },
  {
    name: "Basket",
    component: BasketIcon,
  },
  {
    name: "Tenis meja",
    component: PingpongIcon,
  },
];

export function Categories() {
  const CategoryCard = ({
    icon: Icon,
    name,
  }: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    name: string;
  }) => {
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
          <CategoryCard
            key={indexIcon}
            icon={iconData.component}
            name={iconData.name}
          />
        ))}
      </div>
    </>
  );
}
