import React, { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children }: PageProps) => {
  return (
    <div
      className={`flex flex-column justify-center mobile:pt-16 md:w-[90%] h-max pb-20`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
