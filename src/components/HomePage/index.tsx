import React, { useEffect } from "react";
import Link from "next/link";
import { HomePageProps } from "@/interfaces";

type THome = {
  home: HomePageProps;
};

const HomePage: React.FC<THome> = ({ home }) => {
  const { welcome, description, link, history, mission } = home;
  return (
    <div className="flex-column  text-xl w-[75%] justify-center mobile:rounded-xl mobile:p-2 mobile:bg-black/50 md:p-6">
      <div className="text-4xl font-light text-center text-light pt-10">
        {welcome}
      </div>
      <div className="text-xl font-light text-center text-light pt-4">
        {description}
      </div>
      <div className="md:w-[50%] md:text-2xl font-light md:text-left text-light pt-14">
        {history}
      </div>
      <div className="md:w-[40%] md:text-2xl font-light md:text-left text-light pt-6">
        {mission}
      </div>
      <div className="pt-20 mb-2">
        <Link
          href={"/catalog"}
          className="md:text-xl w-40 h-4 border rounded font-light text-center text-light px-6 py-2"
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
