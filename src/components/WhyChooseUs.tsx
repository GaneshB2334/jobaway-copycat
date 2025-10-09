import { ArrowRight, Award, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Innovative Tools and Technologies",
    description:
      "What truly sets Navarna apart is our commitment to leveraging advanced technologies. Our custom HRMS applications and mobile apps minimize errors and streamline essential HR processes.",
  },
  {
    icon: Shield,
    title: "Comprehensive HR Consultancy Services",
    description:
      "Navarna goes beyond recruitment by offering manpower leasing and complete workforce management. Our flexible and customized HR solutions cover every aspect of your workforce needs, making us a trusted partner for businesses across India.",
  },
  {
    icon: TrendingUp,
    title: "Comprehensive HR Consultancy Services",
    description:
      "Navarna goes beyond recruitment by offering manpower leasing and complete workforce management. Our flexible and customized HR solutions cover every aspect of your workforce needs, making us a trusted partner for businesses across India.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden">
      {/* Decorative SVGs */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="opacity-20"
        >
          <circle cx="60" cy="60" r="55" fill="#6366f1" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <svg
          width="160"
          height="120"
          viewBox="0 0 160 120"
          className="opacity-10"
        >
          <ellipse cx="80" cy="60" rx="70" ry="40" fill="#3b82f6" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 group relative"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors bg-indigo-50 group-hover:bg-indigo-600">
                  <Icon className="w-8 h-8 transition-colors text-indigo-700 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <button className="font-semibold inline-flex items-center transition-colors bg-transparent border-none cursor-pointer p-0 text-indigo-700 group-hover:underline">
                  Learn More{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                {/* Decorative shape */}
                <div className="absolute -top-4 -right-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="opacity-10"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="24"
                      height="24"
                      rx="8"
                      fill="#6366f1"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
