import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChartNoAxesCombined,
  FileTextIcon,
  GraduationCapIcon,
  CircleDollarSign,
} from "lucide-react";
import PrApplicationSteps from "@/components/PrApplicationsSteps";

export default function PrPath() {
  return (
    <>
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
                Best PR Courses in Australia 2025
              </h1>
            </div>
          </div>
        </div>
        {/* section1 */}
        <div className="container mx-auto flex flex-col gap-y-10 py-12">
          <p className="text-body text-gray-950">
            Australia is one of the top destinations for international students
            seeking quality education and a promising future. Many students aim
            to study PR pathway courses in Australia that provide a strong route
            toward living in Australia. If you are planning to build your career
            here, it is crucial to choose from the PR leading courses in
            Australia 2025 that align with the skills in demand. The Australian
            government plans to significantly increase its annual permanent
            immigration intake from 35,000 to 195,000. This step will increase
            the chances of overseas students to gain permanent residency in
            Australia after completing the PR courses in Australian
            universities.
          </p>

          {/* What Are PR List Courses Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-h1 text-blue-800 mb-6">
                What Are PR List Courses in Australia 2025?
              </h2>

              <div className="text-body text-gray-950">
                <p className="mb-4">
                  The Australian Government's Department of Home Affairs website
                  doesn't provide a specific list titled "PR Courses in
                  Australia." Instead, the key to identifying courses that can
                  lead to Permanent Residency (PR) lies in understanding
                  Australia's immigration framework, particularly the Skilled
                  Occupation List (SOL) and the related lists.
                </p>
                <p className="mb-4">
                  These highlight occupations in demand, and studying a course
                  aligned with these occupations can improve your chances of
                  securing PR through pathways like the General Skilled
                  Migration program.
                </p>
                <p className="mb-6">
                  Selecting the right PR leading course in Australia is
                  essential to meet the eligibility criteria for skilled
                  migration. Below is a detailed list of some of the best PR
                  Pathways Courses in Australia 2025 across various industries:
                </p>

                <ul className="list-disc list-outside ml-5 space-y-2">
                  <li>
                    The Skilled Occupation List is split into two main
                    categories:
                  </li>
                  <li>Medium and Long-term Strategic Skills List (MLTSSL)</li>
                  <li>
                    Occupations with long-term demand: Courses tied to these
                    occupations:
                  </li>
                  <li>Short-term Skilled Occupation List (STSOL)</li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <Image
                  src="/transfer2.svg"
                  alt="PR Courses in Australia"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* PR Pathways Courses */}
          <div className="mt-10">
            <h2 className="text-h1 text-blue-800">
              Regional Occupation List (ROL)
            </h2>
            <p className="text-body py-2">Courses tied to these occupations:</p>
          </div>

          {/* What Are PR List Courses Section */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-h1 text-blue-800 mb-6">
                Popular Courses for PR in Australia
              </h2>

              <div className="text-body text-gray-950">
                <ol>
                  <li className="text-h2 text-blue-800 mb-2">
                    1. Trade Courses in Australia for PR
                  </li>
                  <p className="mb-4">
                    The Australian Government's Department of Home Affairs
                    website doesn't provide a specific list titled "PR Courses
                    in Australia." Instead, the key to identifying courses that
                    can lead to Permanent Residency (PR) lies in understanding
                    Australia's immigration framework, particularly the Skilled
                    Occupation List (SOL) and the related lists.
                  </p>
                  <li className="text-h2 text-blue-800 mb-2">
                    2. Diploma Courses for PR in Australia
                  </li>
                  <p className="mb-4">
                    Many students opt for diploma courses for PR in Australia as
                    they provide practical training and high employability.
                    These courses include:
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-1 mb-4">
                    <li>Diploma of Nursing</li>
                    <li>Diploma of Automotive Technology</li>
                    <li>Diploma of Hospitality Management</li>
                  </ul>
                  <li className="text-h2 text-blue-800 mb-2">
                    3. IT & Engineering PR Pathway Courses in Australia
                  </li>
                  <p className="mb-4">
                    Australia requires skilled professionals in IT and
                    engineering fields. Students pursuing PR pathway courses in
                    Australia 2025 in these sectors can apply for PR under the
                    General Skilled Migration (GSM) program.
                  </p>
                </ol>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <Image
                  src="/transfer2.svg"
                  alt="PR Courses in Australia"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* How to Apply for PR After Completing Your Course */}
        <PrApplicationSteps />

        {/* Why Study PR Leading Courses in Australia */}
        <div className="bg-blue-50 py-24">
          <div className="container flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-h1 text-blue-800 mb-8 leading-tight">
                Why Study PR Leading Courses in
                <span className="text-orange-500"> Australia?</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* High employability */}
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10  flex items-center justify-center">
                    <ChartNoAxesCombined className="text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      High employability and
                    </h3>
                    <p className="text-gray-600">career growth</p>
                  </div>
                </div>

                {/* Strong migration pathway */}
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10  flex items-center justify-center">
                    <FileTextIcon className="text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Strong migration pathway
                    </h3>
                    <p className="text-gray-600">System</p>
                  </div>
                </div>

                {/* Quality education */}
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10  flex items-center justify-center">
                    <GraduationCapIcon className="text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Quality education and global
                    </h3>
                    <p className="text-gray-600">recognition</p>
                  </div>
                </div>

                {/* Competitive salary */}
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <CircleDollarSign className="text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Competitive salary packages
                    </h3>
                    <p className="text-gray-600">in PR-listed occupations</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                  <FileTextIcon className="h-4 w-4" />
                  Download PR List Courses in Australia 2025 PDF
                </Button>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p>
                  For a detailed list of PR listed courses in Australia 2025,
                  you can download the{" "}
                  <span className="font-semibold">
                    PR list courses in Australia 2025 PDF
                  </span>{" "}
                  from the official Australian Government website or consult
                  with a migration agent for up-to-date information.
                </p>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="relative">
                <Image
                  src="/transfer-hero-lady.svg"
                  alt="Graduate student celebrating"
                  width={400}
                  height={500}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
