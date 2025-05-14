import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold">Dummy Name</h3>
              <Image
                src="/placeholder.svg?height=20&width=20"
                alt="Logo"
                width={20}
                height={20}
                className="ml-2"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              placerat venenatis augue. Suspendisse tempus venenatis. Rhoncus.
              Maecenas hendrerit.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigations</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/transfer-service"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Transfer Service
                </Link>
              </li>
              <li>
                <Link
                  href="/universities"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Universities
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses/technology"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Technology & Data
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/business"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Business & Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/design"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Design & Creativity
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/personal-development"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Personal Development
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/business-leadership"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Business & Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/more"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  And Many More
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legals</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Help
                </Link>
              </li>
            </ul>

            <h4 className="font-bold mt-6 mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>DummyName 2023 © All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
