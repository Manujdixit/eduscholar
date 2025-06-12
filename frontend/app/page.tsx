import ArticlesSection from "@/components/sections/articles";
import CostComparisonSection from "@/components/sections/costComparison";
import HeroSection from "@/components/sections/Hero";
import ProcessSection from "@/components/sections/process";
import TestimonialsSection from "@/components/sections/testimonials";
import UniversitiesSection from "@/components/sections/universities";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <UniversitiesSection />
      <CostComparisonSection />
      <TestimonialsSection />
      <ProcessSection />
      <ArticlesSection />
    </main>
  );
}
