import { ArrowRight, Award, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Retain Top Talent",
    description: "Providing clear career paths and growth opportunities is key to retaining top talent.",
  },
  {
    icon: Shield,
    title: "Stay Compliant",
    description: "Educate employees about compliance requirements through regular training",
  },
  {
    icon: TrendingUp,
    title: "Improve Employee",
    description: "Invest in employee training development programs enhance skill and knowledge.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: '#2d1bb5' }}>Why Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-200 group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2d1bb5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors"
                  style={{ backgroundColor: 'rgba(45, 27, 181, 0.1)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2d1bb5';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) icon.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(45, 27, 181, 0.1)';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) icon.style.color = '#2d1bb5';
                  }}
                >
                  <Icon className="w-8 h-8 transition-colors" style={{ color: '#2d1bb5' }} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <button
                  className="font-semibold inline-flex items-center transition-colors bg-transparent border-none cursor-pointer p-0"
                  style={{ color: '#2d1bb5' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;