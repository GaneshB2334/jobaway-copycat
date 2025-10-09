import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <nav className="bg-white backdrop-blur-lg rounded-lg px-6 py-4 shadow-lg border border-blue-100">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img className="h-10 " src="/logo.jpg" alt="Navarna Bharat" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-end gap-8">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-1 text-slate-700 hover:text-brand transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-slate-700 hover:text-brand transition-colors font-medium">
                About Us
              </Link>
              <Link to="/it-ites" className="flex items-center gap-1 text-slate-700 hover:text-brand transition-colors font-medium">
                IT-ITES
              </Link>
              <Link to="/fmcg" className="flex items-center gap-1 text-slate-700 hover:text-brand transition-colors font-medium">
                FMCG
              </Link>
              <Link to="/staffing" className="flex items-center gap-1 text-slate-700 hover:text-brand transition-colors font-medium">
                Staffing
              </Link>
              <Link to="/careers" className="flex items-center gap-1 text-slate-700 hover:text-brand transition-colors font-medium">
                Careers
              </Link>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand hover:opacity-90 h-10 rounded-full px-6 text-white transition-all font-medium shadow-sm hover:shadow-md"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-100">
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-1 text-slate-700 hover:text-brand transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-slate-700 hover:text-brand transition-colors font-medium text-left">
                About Us
              </Link>
              <Link to="/it-ites" className="flex items-center gap-1 text-slate-700 hover:text-brand transition-colors font-medium">
                IT-ITES
              </Link>
              <Link to="/fmcg" className="flex items-center gap-1 text-slate-700 hover:text-brand transition-colors font-medium">
                FMCG
              </Link>
              <Link to="/staffing" className="flex items-center gap-1 text-slate-700 hover:text-brand transition-colors font-medium">
                Staffing
              </Link>
              <Link to="/careers" className="text-slate-700 hover:text-brand transition-colors font-medium text-left">
                Careers
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-brand hover:opacity-90 h-10 rounded-full px-8 text-white transition-all font-medium shadow-sm hover:shadow-md"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
