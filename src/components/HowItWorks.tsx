import { useState } from "react";

const talentSteps = [
  {
    number: "1",
    title: "Sign up, It's Free!",
    description: "Our team will set up your account and help you build job to easy-to-use web dashboard.",
  },
  {
    number: "2",
    title: "Post jobs in minutes",
    description: "Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.",
  },
  {
    number: "3",
    title: "Review Your Staff",
    description: "View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.",
  },
];

const businessSteps = [
  {
    number: "1",
    title: "Post jobs in minutes",
    description: "Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.",
  },
  {
    number: "2",
    title: "Sign up, It's Free!",
    description: "Our team will set up your account and help you build job to easy-to-use web dashboard.",
  },
  {
    number: "3",
    title: "Review Your Staff",
    description: "View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("talents");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: '#2d1bb5' }}>Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            How It Works?
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tab List */}
          <div className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-100 p-1.5 rounded-full h-14">
            <button
              onClick={() => setActiveTab("talents")}
              className={`text-base font-semibold rounded-full transition-all ${
                activeTab === "talents"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              For Talents
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`text-base font-semibold rounded-full transition-all ${
                activeTab === "business"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              For Business
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "talents" && (
            <div className="grid md:grid-cols-3 gap-8">
              {talentSteps.map((step) => (
                <div
                  key={step.number}
                  className="p-8 relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-200"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#2d1bb5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}
                >
                  <div 
                    className="absolute -top-6 left-8 w-12 h-12 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md"
                    style={{ backgroundColor: '#2d1bb5' }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "business" && (
            <div className="grid md:grid-cols-3 gap-8">
              {businessSteps.map((step) => (
                <div
                  key={step.number}
                  className="p-8 relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-200"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#2d1bb5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}
                >
                  <div 
                    className="absolute -top-6 left-8 w-12 h-12 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md"
                    style={{ backgroundColor: '#2d1bb5' }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;