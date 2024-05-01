import MobileNav from "@/components/shared/MobileNav";
import SideBar from "@/components/shared/SideBar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <MobileNav/>
      <SideBar/>
      <div className="root-container">
        <div className="wrapper"> {children}</div>
      </div>
      <Toaster/>
    </main>
  );
};

export default Layout;
