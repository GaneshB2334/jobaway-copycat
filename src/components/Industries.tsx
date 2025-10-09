import {
  ArrowRight,
  Bed,
  Coffee,
  Home,
  ShoppingBag,
  Sparkles,
  Wrench,
  Car,
  Heart,
  Stethoscope,
  MonitorCheck,
  Building2,
  BookOpen,
  DollarSign,
  Truck,
  Users,
} from "lucide-react";

const industries = [
  { icon: Stethoscope, name: "Healthcare", staffs: 3200 },
  { icon: Coffee, name: "Hospitality", staffs: 2256 },
  { icon: Building2, name: "Manufacturing", staffs: 4100 },
  { icon: ShoppingBag, name: "Retail", staffs: 1740 },
  { icon: MonitorCheck, name: "IT & Technology", staffs: 2900 },
  { icon: Truck, name: "Logistics & Transportation", staffs: 2100 },
  { icon: Wrench, name: "Construction", staffs: 1980 },
  { icon: BookOpen, name: "Education", staffs: 1200 },
  { icon: DollarSign, name: "Finance & Banking", staffs: 1100 },
  { icon: Home, name: "Food Service", staffs: 1408 },
  { icon: Sparkles, name: "Events & Entertainment", staffs: 3948 },
  { icon: Users, name: "General Labor", staffs: 2984 },
];

const Industries = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2 text-indigo-700">
            Industries
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            Industries Served
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="p-6 bg-white rounded-xl hover:shadow-xl transition-all border-2 border-gray-200 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors bg-indigo-50 group-hover:bg-indigo-600">
                  <Icon className="w-6 h-6 transition-colors text-indigo-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.staffs} Staffs</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="rounded-full border-2 border-gray-300 bg-transparent px-8 py-3 text-gray-700 font-semibold inline-flex items-center transition-all hover:shadow-md hover:border-indigo-700 hover:text-indigo-700">
            View All Categories <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
