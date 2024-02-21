"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathName = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/icons/close.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          {/* <SignedIn> */}
          <ul className="sidebar-nav_elements">
            {navLinks.map((link) => {
              const isActive = link.route === pathName;
              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element cursor-pointer group ${
                    isActive
                      ? "bg-purple-gradient text-white "
                      : "text-gray-700"
                  } `}
                >
                  <Link href={link.route} className="sidebar-link">
                    <Image alt="logo" src={link.icon}  width={36} height={36}  
                    className={`${isActive && 'brightness-200'}`}
                    />
                    <span className="sidebar-link_text">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* </SignedIn> */}

          {/* <SignedOut> */}
             
          {/* </SignedOut> */}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
