import { ArrowRight, Bed, Coffee, Home, ShoppingBag, Sparkles, Wrench, Car, Heart } from "lucide-react";

const industries = [
  { icon: Bed, name: "Hotel", staffs: 2853 },
  { icon: Coffee, name: "Hospitality", staffs: 2256 },
  { icon: Home, name: "Kitchen", staffs: 1408 },
  { icon: ShoppingBag, name: "Retail", staffs: 1740 },
  { icon: Sparkles, name: "Special Events", staffs: 3948 },
  { icon: Wrench, name: "General Labor", staffs: 2984 },
  { icon: Car, name: "Driving", staffs: 4509 },
  { icon: Heart, name: "Senior Living", staffs: 1039 },
];

const Industries = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: '#2d1bb5' }}>Industries</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Industries Served
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="p-6 bg-white rounded-lg hover:shadow-xl transition-all border-2 border-gray-200 group cursor-pointer"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2d1bb5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors"
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
                  <Icon className="w-6 h-6 transition-colors" style={{ color: '#2d1bb5' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.staffs} Staffs</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            className="rounded-full border-2 border-gray-300 bg-transparent px-8 py-3 text-gray-700 font-semibold inline-flex items-center transition-all hover:shadow-md"
            style={{
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#2d1bb5';
              e.currentTarget.style.color = '#2d1bb5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.color = '#374151';
            }}
          >
            View All Categories <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;