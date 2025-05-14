"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-blue-800 font-bold text-xl">
              <span className="text-blue-800">Dummy Name</span>
              <Image
                src="/placeholder.svg?height=20&width=20"
                alt="Logo"
                width={20}
                height={20}
                className="inline-block ml-1"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-800">
              Home
            </Link>
            <Link href="/compare" className="text-gray-600 hover:text-blue-800">
              Compare
            </Link>
            <Link
              href="/examinations"
              className="text-gray-600 hover:text-blue-800"
            >
              Examinations
            </Link>
            <Link
              href="/transfer-assistance"
              className="text-gray-600 hover:text-blue-800"
            >
              Transfer Assistance
            </Link>
            <Link
              href="/student-resources"
              className="text-gray-600 hover:text-blue-800"
            >
              Student Resources
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white">
              Apply Now
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Request a Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
          <div className="flex flex-col space-y-4 pt-4 pb-3">
            <Link href="/" className="text-gray-600 hover:text-blue-800">
              Home
            </Link>
            <Link href="/compare" className="text-gray-600 hover:text-blue-800">
              Compare
            </Link>
            <Link
              href="/examinations"
              className="text-gray-600 hover:text-blue-800"
            >
              Examinations
            </Link>
            <Link
              href="/transfer-assistance"
              className="text-gray-600 hover:text-blue-800"
            >
              Transfer Assistance
            </Link>
            <Link
              href="/student-resources"
              className="text-gray-600 hover:text-blue-800"
            >
              Student Resources
            </Link>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white w-full">
              Apply Now
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
              Request a Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-blue-900 py-4">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center">
            <button className="absolute left-4 text-gray-400">
              <Search size={20} />
            </button>
            <Input
              type="text"
              placeholder="Search for Universities, Courses and More"
              className="pl-10 pr-4 py-2 w-full rounded-md bg-blue-700 border-blue-600 text-white placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white">
              Search
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
