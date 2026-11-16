import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Services – Studio Kintsugi',
  description: 'Residential Design, Commercial Spaces, Turnkey Solutions, and Online Interior Consultation.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-32 bg-[#FBF9F5]">
      <ServicesSection />
      <ProcessSection />
      <ContactCTA />
    </div>
  );
}
