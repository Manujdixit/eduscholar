import ArticlesSection from "@/components/articles";
import CostComparisonSection from "@/components/costComparison";
import HeroSection from "@/components/Hero";
import ProcessSection from "@/components/process";
import TestimonialsSection from "@/components/testimonials";
import UniversitiesSection from "@/components/universities";

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
