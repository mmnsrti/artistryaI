import MobileNav from "@/components/shared/MobileNav";
import SideBar from "@/components/shared/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <MobileNav/>
      <SideBar/>
      <div className="root-container">
        <div className="wrapper"> {children}</div>
      </div>
    </main>
  );
};

export default Layout;
