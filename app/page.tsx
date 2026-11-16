import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ExperienceSection from '@/components/ExperienceSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactCTA from '@/components/ContactCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Marquee />
      <ExperienceSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsGallery />
      <ProcessSection />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
}
