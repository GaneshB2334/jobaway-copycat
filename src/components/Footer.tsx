import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Navarna Bharat</span>
            </Link>
            <p className="text-white/80 text-sm mb-4">
              Dynamic and versatile force committed to excellence in FMCG, IT services, and Staffing Solutions.
            </p>
            <p className="text-white/80 text-sm">
              <strong>Email:</strong> info@navarna.com<br/>
              <strong>Phone:</strong> +91 120 4914498
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-white/80 hover:text-accent transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fmcg" className="text-white/80 hover:text-accent transition-colors">
                  FMCG Products
                </Link>
              </li>
              <li>
                <Link to="/staffing" className="text-white/80 hover:text-accent transition-colors">
                  Staffing Solutions
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-white/80 hover:text-accent transition-colors">
                  IT Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
          <p>&copy; 2024 Navarna Bharat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
