"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function NotFoundPage() {
  return (
    <section className="flex justify-center items-center h-screen bg-white">
      <div className="max-w-2xl w-full p-8  rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <Image
            className="h-auto w-auto"
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="404 Illustration"
            width={1000}
            height={1000}
          />
        </div>
        <h1 className="text-6xl text-center text-gray-800 mb-4">404</h1>
        <h3 className="text-3xl text-center text-gray-800 mb-4">
          Looks like you&apos;re lost
        </h3>
        <p className="text-lg text-center text-gray-600 mb-8">
          The page you are looking for is not available!
        </p>
        <Link
          className="flex mx-auto px-6 py-3 w-fit justify-center items-center text-lg text-white bg-purple-500 rounded hover:bg-purple-700 ease transition-all "
          href="/"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}
