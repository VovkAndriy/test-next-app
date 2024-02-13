import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen">
      <Header />
      <main className="flex justify-center pt-14">{children}</main>
    </div>
  );
};

export default Layout;
