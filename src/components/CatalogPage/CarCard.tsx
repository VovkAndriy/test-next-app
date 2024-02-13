import { CarProps } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type TCar = {
  car: CarProps;
};

const CarCard = ({ car }: TCar) => {
  const { id, make, model, year, price, image } = car;
  return (
    <div className="grid text-light rounded bg-black/40 p-4">
      <Link
        href={`catalog/${id}`}
        className="flex text-white overflow-hidden rounded-md justify-center items-center bg-white/40"
      >
        <Image
          alt={image}
          src={`/cars/${image}`}
          width={2000}
          height={1500}
          objectPosition="center"
          className="aspect-[5/3] h-full object-cover"
        />
      </Link>
      <div className="flex-col">
        <Link className="text-xl xl:text-3xl" href={`catalog/${id}`}>
          {make} {model}
        </Link>
        <div className="text-base xl:text-2xl">Year: {year}</div>
        <div className="text-base xl:text-2xl">Price: {price}</div>
      </div>
    </div>
  );
};

export default CarCard;
