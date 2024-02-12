import { CarProps } from "@/interfaces";
import Link from "next/link";
import React from "react";

type TCar = {
  car: CarProps;
};

const CarCard = ({ car }: TCar) => {
  const { id, make, model, year, price } = car;
  return (
    <div className="text-light rounded bg-black/40 p-4">
      <div className="flex  h-[200px] md:h-[250px] xl:h-350px text-white rounded-md justify-center items-center bg-white/40">
        image loading...
      </div>
      <Link className="text-2xl md:text-3xl" href={`catalog/${id}`}>
        {make} {model}
      </Link>
      <div className="text-xl md:text-2xl">Year: {year}</div>
      <div className="text-xl md:text-2xl">Price: {price}</div>
    </div>
  );
};

export default CarCard;
