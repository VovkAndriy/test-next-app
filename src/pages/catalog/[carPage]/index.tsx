import React from "react";
import catalog from "@/mock/catalog.json";
import { useRouter } from "next/router";
import Image from "next/image";

const CarPage = () => {
  const router = useRouter();
  const selectedRoute = router.query;
  const selected = catalog.cars.find((car) => car.id === selectedRoute.carPage);
  return (
    <div className="flex-col w-[80%] xl:w-[60%] rounded bg-black/50 justify-center p-2 md:p-6">
      <div className="text-2xl lg:text-6xl font-light text-center text-light pt-10">
        {selected?.make} {selected?.model}
      </div>
      <div className="text-xl lg:text-3xl font-light text-center text-light pt-3 xl:pt-6">
        {selected?.year}
      </div>
      <div className="flex text-white rounded-md overflow-hidden justify-center items-center bg-white/20 mt-10">
        <Image
          alt={`${selected?.image}`}
          src={`/cars/${selected?.image}`}
          width={1500}
          height={1000}
          objectFit="cover"
          objectPosition="center"
          // className="w-auto h-full"
        />
      </div>
      <div className="text-xl xl:text-2xl font-light text-left text-light pt-6">
        Price: {selected?.price}
      </div>
      <div className="xl:text-2xl font-light text-left text-light pt-6">
        {selected?.description}
      </div>
    </div>
  );
};

export default CarPage;
