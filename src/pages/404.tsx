import PageContainer from "@/components/PageContainer/PageContainer";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <PageContainer>
      <div className="flex-column justify-center">
        <div className="text-8xl font-light text-center text-light pt-10">
          404
        </div>
        <div className="text-6xl font-light text-center text-light pt-10">
          Page not found
        </div>
        <div className="w-full flex justify-center pt-16">
          <Link
            href={"/"}
            className="text-xl border rounded font-light text-center text-light px-6 py-2"
          >
            Go home
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default error;
