"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/assets/logo.png" alt="logo" width={120} height={28} />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="avatar"
                className=" rounded-full cursor-pointer object-cover ring-2 ring-white"
                width={32}
                height={32}
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={120}
                  height={28}
                />
              </Link>
              <ul className="header-nav-elements">
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
                      <Link href={link.route} className="sidebar-link cursor-pointer">
                        <Image
                          alt="logo"
                          src={link.icon}
                          width={36}
                          height={36}
                          className={`${isActive && "brightness-200"}`}
                        />
                        <span className="sidebar-link_text">{link.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
