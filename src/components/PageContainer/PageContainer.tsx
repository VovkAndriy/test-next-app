import React, { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children }: PageProps) => {
  return (
    <div
      className={`flex flex-column justify-center pt-16 md:pt-20 w-[95%] md:w-[90%] h-max pb-20`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
