import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    // Add your subscription logic here
  };

  return (
    <section className="py-16 text-white" style={{ backgroundColor: '#2d1bb5' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe Newsletter</h2>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white text-gray-900 rounded-full px-6 h-14 text-base border-0 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-white hover:bg-gray-100 text-gray-900 rounded-full px-8 h-14 text-lg font-semibold inline-flex items-center justify-center transition-all shadow-md hover:shadow-lg"
            >
              Subscribe <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;