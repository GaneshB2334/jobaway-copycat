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
              <span className="text-xl font-bold">JobAway</span>
            </Link>
            <p className="text-white/80 text-sm">
              The leading hospitality staffing platform connecting businesses with qualified talent.
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

          {/* For Workers */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Workers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/find-work" className="text-white/80 hover:text-accent transition-colors">
                  Find Work
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-white/80 hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white/80 hover:text-accent transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h3 className="font-bold text-lg mb-4">For Business</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hire" className="text-white/80 hover:text-accent transition-colors">
                  Hire Talent
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/80 hover:text-accent transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/80 hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
          <p>&copy; 2024 JobAway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
