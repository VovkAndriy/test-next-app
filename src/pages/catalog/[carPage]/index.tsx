import React from "react";
import catalog from "@/mock/catalog.json";
import { useRouter } from "next/router";

const CarPage = () => {
  const router = useRouter();
  const selectedRoute = router.query;
  const selected = catalog.cars.find((car) => car.id === selectedRoute.carPage);
  return (
    <div className="flex-column w-[60%] rounded bg-black/50 justify-center p-2 md:p-6">
      <div className="text-6xl font-light text-center text-light pt-10">
        {selected?.make} {selected?.model}
      </div>
      <div className="text-3xl font-light text-center text-light pt-6">
        {selected?.year}
      </div>
      <div className="flex h-[400px] text-white rounded-md justify-center items-center bg-white/20 mt-10">
        image loading...
      </div>
      <div className="text-2xl font-light text-left text-light pt-6">
        Price: {selected?.price}
      </div>
      <div className="text-2xl font-light text-left text-light pt-6">
        {selected?.description}
      </div>
    </div>
  );
};

export default CarPage;
