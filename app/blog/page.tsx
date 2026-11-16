import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Posts & Insights – Studio Kintsugi',
  description: 'Design musings, architectural perspectives, and interior inspiration from Studio Kintsugi.',
};

const POSTS = [
  {
    title: 'The Art of Kintsugi in Contemporary Interiors',
    excerpt: 'How the ancient philosophy of embracing imperfection translates into enduring, soulful modern spaces.',
    date: 'June 2026',
    category: 'Philosophy',
    image: '/images/076_ChatGPT-Image-Jun-11-2026-04_30_27-PM.png',
  },
  {
    title: 'Designing with Natural Light & Organic Textures',
    excerpt: 'Harnessing tactile linens, raw stone, and warm timbers to build serene everyday sanctuaries.',
    date: 'May 2026',
    category: 'Design Guide',
    image: '/images/027_cropped-Enscape_2025-05-22-15-13-16-scaled-1.png',
  },
  {
    title: 'Spatial Harmony: How Layouts Impact Well-Being',
    excerpt: 'Practical space planning strategies that elevate focus, calmness, and effortless everyday routines.',
    date: 'April 2026',
    category: 'Architecture',
    image: '/images/106_Screenshot-2026-06-11-141255-e1781167423110.png',
  },
];

export default function BlogPage() {
  return (
    <div className="py-16 lg:py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#A76D58]">
            JOURNAL
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-[#1A1918]">
            POSTS & STORIES
          </h1>
          <p className="text-base text-[#666460]">
            Insights, architectural essays, and creative reflections from the Studio Kintsugi team.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE6DF]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#A76D58] font-medium">
                    <span>{post.category}</span>
                    <span className="text-[#A09C94]">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1A1918]">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#666460] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F0ECE1]">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#1A1918] hover:text-[#A76D58] cursor-pointer">
                    Read Article →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
