import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Check, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About JobAway</h1>
            <p className="text-xl text-muted-foreground">
              The leading hospitality staffing platform connecting businesses with qualified talent
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our Team"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At JobAway, we believe in creating opportunities that transform lives. Our platform bridges
                the gap between talented professionals and businesses seeking excellence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#2d1bb5' }} />
                  <span>Connect qualified professionals with meaningful work</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#2d1bb5' }} />
                  <span>Provide flexible staffing solutions for businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#2d1bb5' }} />
                  <span>Build a community of trusted professionals</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(45, 27, 181, 0.1)' }}>
                <Target className="w-8 h-8" style={{ color: '#2d1bb5' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted staffing platform in the hospitality industry
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(45, 27, 181, 0.1)' }}>
                <Users className="w-8 h-8" style={{ color: '#2d1bb5' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Team</h3>
              <p className="text-muted-foreground">
                Dedicated professionals committed to your success
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(45, 27, 181, 0.1)' }}>
                <Zap className="w-8 h-8" style={{ color: '#2d1bb5' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, excellence, and innovation in everything we do
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;