import { useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <nav className="bg-white/95 backdrop-blur-lg rounded-lg px-6 py-4 shadow-lg border border-blue-100">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-800">Navarna Bharat</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-end gap-8">
            {!searchOpen && (
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                  Home
                </button>
                <button className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                  About
                </button>
                <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                  Solutions
                </button>
                <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                  Pages
                </button>
                <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                  Blog
                </button>
                <button className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                  Contact
                </button>
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
                  <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 h-10 rounded-full px-8 text-white transition-all font-medium shadow-sm hover:shadow-md">
                    Log In
                  </button>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-6 h-10 font-medium shadow-sm hover:shadow-md transition-all">
                    Get Started
                  </button>
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
          <div className="lg:hidden mt-4 pt-4 border-t border-blue-100">
            <div className="flex flex-col gap-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 pl-12 pr-4 bg-white border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Home <ChevronDown className="w-4 h-4" />
              </button>
              <button className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-left">
                About
              </button>
              <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Pages <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Blog <ChevronDown className="w-4 h-4" />
              </button>
              <button className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-left">
                Contact
              </button>
              <div className="flex flex-col gap-2 pt-2">
                <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 h-10 rounded-full px-8 text-white transition-all font-medium shadow-sm hover:shadow-md">
                  Log In
                </button>
                <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full h-10 font-medium shadow-sm hover:shadow-md transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;