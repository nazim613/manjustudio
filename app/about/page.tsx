import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us – Studio Kintsugi',
  description: 'Meet the studio behind the spaces. Studio Kintsugi was founded by Manju and Mukul, combining creativity and craftsmanship.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#A76D58]">
            MEET THE STUDIO BEHIND THE SPACES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-[#1A1918]">
            OUR STORY
          </h1>
          <p className="text-lg text-[#55524E] leading-relaxed font-light">
            Studio Kintsugi was founded by Manju and Mukul, united by a shared belief that every space has the potential to become something extraordinary.
          </p>
        </div>

        {/* Philosophy & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-20 border-b border-[#EAE6DF]">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#EAE6DF]">
            <Image
              src="/images/076_ChatGPT-Image-Jun-11-2026-04_30_27-PM.png"
              alt="Studio Kintsugi Philosophy"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:col-span-6 space-y-6 text-[#55524E] leading-relaxed">
            <h3 className="font-serif text-2xl lg:text-3xl text-[#1A1918]">
              Finding Beauty in Every Detail
            </h3>
            <p>
              Inspired by the Japanese art of <strong className="text-[#1A1918]">Kintsugi</strong>, where broken pottery is repaired with gold to reveal a new kind of beauty, we approach design with the same philosophy. We believe in uncovering the potential within every space, honoring its character, and transforming it with purpose.
            </p>
            <p>
              One of us dreams about what a space can become. The other ensures every detail is brought to life. Together, we create spaces where creativity and craftsmanship meet.
            </p>
            <p>
              Our work blends timeless design with practical functionality, creating interiors that feel personal, meaningful, and built to last. Beyond aesthetics, we value the relationships we build with our clients, believing that the most successful spaces are born from trust, collaboration, and a shared vision.
            </p>
            <p className="font-serif italic text-lg text-[#1A1918] pt-2">
              “At Studio Kintsugi, every space tells a story. Our role is to help uncover it and bring it to life with care, purpose, and a touch of gold.”
            </p>
          </div>
        </div>

        {/* Meet Your Designers */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#A76D58]">
              LEADERSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#1A1918]">
              MEET YOUR DESIGNERS
            </h2>
            <p className="text-sm text-[#666460]">
              The visionary minds directing the aesthetic, execution, and spirit of Studio Kintsugi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Mukul Malhan */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/5] bg-[#EAE6DF]">
                <Image
                  src="/images/096_Gemini_Generated_Image_lr0b4qlr0b4qlr0b.png"
                  alt="Mukul Malhan - Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#1A1918]">
                    Mukul Malhan
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-[#A76D58] font-semibold">
                    Co-Founder & Design Director
                  </span>
                </div>
                <p className="text-sm text-[#666460] leading-relaxed">
                  A visionary designer with a background in Product and Industrial Design, Mukul has seamlessly transitioned his expertise into the realm of interior architecture. He stands as the driving force behind the studio, combining a keen artistic eye with precise project management and execution.
                </p>
              </div>
            </div>

            {/* Manju Malhan */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/5] bg-[#EAE6DF]">
                <Image
                  src="/images/102_Gemini_Generated_Image_q3jb4cq3jb4cq3jb-e1781340458751.png"
                  alt="Manju Malhan - Co-Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#1A1918]">
                    Manju Malhan
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-[#A76D58] font-semibold">
                    Co-Founder & Principal Interior Designer
                  </span>
                </div>
                <p className="text-sm text-[#666460] leading-relaxed">
                  With deep passion for materials, spatial balance, and artisanal craftsmanship, Manju curates the emotional resonance of every space. Her tactile intuition and refined aesthetic sensitivity ensure that each project feels like a natural extension of its inhabitants.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1A1918] text-[#FBF9F5] text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#33312E] transition-all"
          >
            Start A Conversation
          </Link>
        </div>

      </div>
    </div>
  );
}
