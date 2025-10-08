import { useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
            {!searchOpen && (
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
            )}

            {searchOpen && (
              <div className="flex-1 max-w-2xl mx-8">
                <div className="relative">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className="w-full h-10 pl-12 pr-4 bg-white border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-full transition-colors"
              >
                {searchOpen ? (
                  <X className="w-5 h-5 text-slate-700" />
                ) : (
                  <Search className="w-5 h-5 text-slate-700" />
                )}
              </button>
              {!searchOpen && (
                <>
                  <Link to="/contact" className="inline-flex items-center justify-center bg-brand hover:opacity-90 h-10 rounded-full px-6 text-white transition-all font-medium shadow-sm hover:shadow-md">
                    Contact
                  </Link>
                </>
              )}
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
              {/* Mobile Search */}
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 pl-12 pr-4 bg-white border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand text-slate-800 placeholder:text-slate-400"
                />
              </div>

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
                <Link to="/contact" className="inline-flex items-center justify-center bg-brand hover:opacity-90 h-10 rounded-full px-8 text-white transition-all font-medium shadow-sm hover:shadow-md">
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