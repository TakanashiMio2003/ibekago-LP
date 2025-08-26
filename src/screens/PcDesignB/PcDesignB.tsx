import React from "react";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ResourcesSection } from "./sections/ResourcesSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const PcDesignB = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full bg-[#ededed]">
      <NavigationSection />
      <HeroSection />
      <ProcessSection />
      <ResourcesSection />
      <FeaturesSection />
      <IntroductionSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};
