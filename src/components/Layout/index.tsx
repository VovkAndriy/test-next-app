import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen">
      <Header />
      <main className="flex justify-center pt-24 h-full">{children}</main>
    </div>
  );
};

export default Layout;
