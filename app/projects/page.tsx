import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Projects – Studio Kintsugi',
  description: 'Explore our interior design, architecture, and turnkey portfolio projects.',
};

const PROJECTS = [
  {
    title: 'The Minimalist Sanctuary',
    category: 'Residential',
    location: 'Dehradun, Uttarakhand',
    image: '/images/transparent_1.png',
  },
  {
    title: 'Contemporary Dining & Hearth',
    category: 'Residential',
    location: 'Mussoorie Hills',
    image: '/images/transparent_1_2.png',
  },
  {
    title: 'Warm Terracotta Master Suite',
    category: 'Residential',
    location: 'New Delhi Residence',
    image: '/images/transparent_1_3.png',
  },
  {
    title: 'Executive Studio Workspace',
    category: 'Commercial',
    location: 'Dehradun Studio',
    image: '/images/transparent_1_4.png',
  },
  {
    title: 'Boutique Hospitality Lounge',
    category: 'Commercial',
    location: 'Rishikesh Valley',
    image: '/images/transparent_1_5.png',
  },
  {
    title: 'Artisan Bath & Powder Room',
    category: 'Residential',
    location: 'Private Villa',
    image: '/images/transparent_1_6.png',
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#EAE7E2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Alert from original site */}
        <div className="p-6 mb-16 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#DFDCD4] text-center max-w-3xl mx-auto shadow-sm">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A76D58]">
            ANNOUNCEMENT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1918] mt-1 mb-2">
            UPDATES ARE UNDERWAY....WE&apos;LL BE BACK SOON!
          </h2>
          <p className="text-sm text-[#666460]">
            We are curating a brand new showcase of our latest residential & commercial builds. Browse our active portfolio highlights below.
          </p>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#A76D58]">
            CURATED SPACES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-[#1A1918]">
            OUR PROJECTS
          </h1>
          <p className="text-base text-[#55524E] max-w-2xl mx-auto font-light leading-relaxed">
            Each environment is tailored to express the lifestyle and vision of our clients, built with enduring materials and refined architectural proportion.
          </p>
        </div>

        {/* Seamless Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col transition-all duration-300"
            >
              <div className="relative aspect-[790/1024] w-full bg-transparent overflow-visible">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transform group-hover:scale-[1.02] transition-transform duration-500 drop-shadow-sm"
                />
              </div>

              <div className="pt-3 text-center">
                <span className="text-[11px] uppercase tracking-widest text-[#A76D58] font-medium">
                  {project.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1918] mt-0.5 group-hover:text-[#A76D58] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#7A7670] tracking-wider uppercase mt-0.5">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
