import Link from 'next/link';

export const metadata = {
  title: 'Shop – Studio Kintsugi',
  description: 'Curated furniture, bespoke decor, and artisan lighting by Studio Kintsugi.',
};

export default function ShopPage() {
  return (
    <div className="py-24 lg:py-36 bg-[#FBF9F5] flex items-center justify-center min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#A76D58]">
          STUDIO KINTSUGI COLLECTION
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#1A1918]">
          UPDATES ARE UNDERWAY....WE&apos;LL BE BACK SOON!
        </h1>
        <p className="text-base text-[#666460] leading-relaxed">
          We are currently crafting an exclusive range of handcrafted furniture, bespoke ceramics, and sculptural lighting fixtures. Check back soon or contact us directly for bespoke commissions.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#1A1918] text-[#FBF9F5] text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#33312E] transition-all"
          >
            Inquire For Custom Furniture
          </Link>
        </div>
      </div>
    </div>
  );
}
