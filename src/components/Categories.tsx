import { ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: '#2d1bb5' }}>Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Discover The Products & <br className="hidden md:block" />
            Services We Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* FMCG Products */}
          <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=600&h=400&fit=crop"
              alt="Fast-Moving Consumer Goods"
              className="w-full h-[400px] object-cover"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-opacity-90 via-opacity-50 to-transparent"
              style={{ 
                background: 'linear-gradient(to top, rgba(45, 27, 181, 0.9), rgba(45, 27, 181, 0.5), transparent)'
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">FMCG Products</h3>
              <p className="text-white/90 mb-6">
                In the ever-evolving landscape of FMCG, we offer a comprehensive range of products and services that meet the highest industry standards.
              </p>
              <button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2.5 font-semibold inline-flex items-center transition-all shadow-md hover:shadow-lg">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Staffing Solutions */}
          <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
              alt="Staffing Solutions"
              className="w-full h-[400px] object-cover"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-opacity-90 via-opacity-50 to-transparent"
              style={{ 
                background: 'linear-gradient(to top, rgba(45, 27, 181, 0.9), rgba(45, 27, 181, 0.5), transparent)'
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Staffing Solutions</h3>
              <p className="text-white/90 mb-6">
                Unlock the potential of your workforce with our tailored staffing solutions. We understand the importance of human capital in driving success.
              </p>
              <button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2.5 font-semibold inline-flex items-center transition-all shadow-md hover:shadow-lg">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* IT Services */}
          <div className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
              alt="IT Services"
              className="w-full h-[400px] object-cover"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-opacity-90 via-opacity-50 to-transparent"
              style={{ 
                background: 'linear-gradient(to top, rgba(45, 27, 181, 0.9), rgba(45, 27, 181, 0.5), transparent)'
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">IT Services</h3>
              <p className="text-white/90 mb-6">
                At Navarna, we pride ourselves on being at the forefront of technological innovation. We implement robust cybersecurity measures to safeguard sensitive information.
              </p>
              <button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2.5 font-semibold inline-flex items-center transition-all shadow-md hover:shadow-lg">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;