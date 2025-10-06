import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Search, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <nav className="bg-secondary/95 backdrop-blur-lg rounded-full px-6 py-4 shadow-lg border border-border">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">Navarna Bharat</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                Home <ChevronDown className="w-4 h-4" />
              </button>
              <Link to="/about" className="text-foreground hover:text-accent transition-colors font-medium">
                About
              </Link>
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                Pages <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                Blog <ChevronDown className="w-4 h-4" />
              </button>
              <Link to="/contact" className="text-foreground hover:text-accent transition-colors font-medium">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center hover:bg-muted rounded-full transition-colors">
                <Search className="w-5 h-5 text-foreground" />
              </button>
              <Link to="/login" className="text-foreground hover:text-accent transition-colors font-medium">
                Log In
              </Link>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                Home <ChevronDown className="w-4 h-4" />
              </button>
              <Link to="/about" className="text-foreground hover:text-accent transition-colors font-medium">
                About
              </Link>
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                Pages <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors font-medium">
                Blog <ChevronDown className="w-4 h-4" />
              </button>
              <Link to="/contact" className="text-foreground hover:text-accent transition-colors font-medium">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link to="/login" className="text-foreground hover:text-accent transition-colors font-medium">
                  Log In
                </Link>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
