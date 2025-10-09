import { ArrowRight, CheckCircle } from "lucide-react";

const bitoFeatures = [
  "Thousands of verified job listings",
  "Smart matching for candidates & employers",
  "Easy, fast application process",
  "Trusted by top companies",
  "Mobile-friendly experience",
];

const BitoJobs = () => {
  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2 text-gray-400">
            Prime Product
          </p>
          <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Bito Jobs – India’s Fastest Growing Job Portal
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Discover thousands of opportunities, connect with top employers, and
            experience seamless job search with Bito Jobs—Navarna’s flagship
            portal.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <div className="flex-1">
            <img
              src="/Black White and Orange Modern Pitch Deck Presentation.png"
              alt="Bito Jobs Portal Screenshot"
              className="rounded-2xl shadow-2xl border-4 border-gray-100 object-cover w-full"
            />
          </div>
          <div className="flex-1">
            <ul className="mb-8 space-y-4 text-left">
              {bitoFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-lg">
                  <CheckCircle className="w-6 h-6 text-indigo-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="bg-indigo-700 text-white font-bold rounded-full px-8 py-4 inline-flex items-center shadow-lg hover:bg-indigo-800 transition-all text-lg">
              Visit Bito Jobs <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BitoJobs;
