const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2d1bb5' }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <span className="text-xl font-bold" style={{ color: '#2d1bb5' }}>Navarna Bharat</span>
            </a>
            <p className="text-gray-600 text-sm mb-4">
              Dynamic and versatile force committed to excellence in FMCG, IT services, and Staffing Solutions.
            </p>
            <p className="text-gray-600 text-sm">
              <strong className="text-gray-800">Email:</strong> info@navarna.com<br/>
              <strong className="text-gray-800">Phone:</strong> +91 120 4914498
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#2d1bb5' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  Services
                </a>
              </li>
              <li>
                <a href="/industries" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  Industries
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#2d1bb5' }}>Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/fmcg" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  FMCG Products
                </a>
              </li>
              <li>
                <a href="/staffing" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  Staffing Solutions
                </a>
              </li>
              <li>
                <a href="/it-services" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  IT Services
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#2d1bb5' }}>Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#2d1bb5'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2024 Navarna Bharat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;