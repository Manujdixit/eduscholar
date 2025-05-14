import ArticlesSection from "@/components/articles";
import CostComparisonSection from "@/components/costComparison";
import Footer from "@/components/footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/navbar";
import ProcessSection from "@/components/process";
import TestimonialsSection from "@/components/testimonials";
import UniversitiesSection from "@/components/universities";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <UniversitiesSection />
      <CostComparisonSection />
      <TestimonialsSection />
      <ProcessSection />
      <ArticlesSection />
      <Footer />
    </main>
  );
}
