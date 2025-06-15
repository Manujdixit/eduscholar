import Image from "next/image";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react"; // Added Phone, Mail, MapPin
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // Added Input

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image
          src="/globe.png"
          alt="Library with books on shelves"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <section className="mt-20 container mx-auto px-4 py-12">
        {/* Lets Talk Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold text-gray-800">
              Let's Talk About <br />
              <span className="text-orange-500">Your Concern</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              dictum purus. Nullam non mollis metus. Suspendisse cursus ornare
              ultrices.
            </p>
          </div>

          {/* Right Form Content */}
          <div className="lg:w-2/3"></div>
        </div>

        {/* Contact Cards Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-orange-50/50 shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full shadow">
                <Phone className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="mt-4 font-semibold text-blue-700">CALL US NOW</h3>
              <p className="mt-1 text-gray-700">+61 430 190 323</p>
              <p className="text-sm text-gray-500">24/7 Support</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50/50 shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full shadow">
                <Mail className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="mt-4 font-semibold text-blue-700">
                DROP US AN EMAIL
              </h3>
              <p className="mt-1 text-gray-700">info@pickmyuni.com.au</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50/50 shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full shadow">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="mt-4 font-semibold text-blue-700">ADDRESS</h3>
              <p className="mt-1 text-gray-700">
                Suite 204, Level 2, 227 Collins Street,
                <br />
                Melbourne, VIC, Australia
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
