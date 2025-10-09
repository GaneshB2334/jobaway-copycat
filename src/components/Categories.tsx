import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "FMCG Products",
    description:
      "In the ever-evolving landscape of FMCG, we offer a comprehensive range of products and services that meet the highest industry standards.",
    image:
      "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600&h=400&fit=crop",
    alt: "Fast-Moving Consumer Goods",
  },
  {
    title: "Staffing Solutions",
    description:
      "Unlock the potential of your workforce with our tailored staffing solutions. We understand the importance of human capital in driving success.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    alt: "Staffing Solutions",
  },
  {
    title: "IT Services",
    description:
      "At Navarna, we pride ourselves on being at the forefront of technological innovation. We implement robust cybersecurity measures to safeguard sensitive information.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    alt: "IT Services",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-indigo-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2 text-indigo-700">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover The Products & <br className="hidden md:block" />
            Services We Offer
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={cat.image}
                alt={cat.alt}
                className="w-full h-[400px] object-cover rounded-3xl transition-all duration-500 group-hover:brightness-90 group-hover:blur-[1px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-700/40 to-transparent transition-all duration-300 group-hover:from-indigo-900/90 group-hover:via-indigo-700/60" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <h3 className="text-3xl font-bold mb-4 drop-shadow">
                  {cat.title}
                </h3>
                <p className="text-white/90 mb-6 drop-shadow">
                  {cat.description}
                </p>
                <button className="bg-white text-indigo-700 hover:bg-indigo-700 hover:text-white rounded-full px-6 py-2.5 font-semibold inline-flex items-center transition-all shadow-md hover:shadow-lg group-hover:scale-110 group-hover:drop-shadow-lg">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              {/* Decorative SVG shape */}
              <div className="absolute top-6 right-6 z-10 opacity-30 group-hover:opacity-60 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="#6366f1" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
