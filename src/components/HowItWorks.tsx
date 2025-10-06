import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            How It Works?
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="talents" className="text-lg">For Talents</TabsTrigger>
            <TabsTrigger value="business" className="text-lg">For Business</TabsTrigger>
          </TabsList>

          <TabsContent value="talents">
            <div className="grid md:grid-cols-3 gap-8">
              {talentSteps.map((step) => (
                <Card
                  key={step.number}
                  className="p-8 relative hover:shadow-xl transition-shadow border-2 hover:border-accent"
                >
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 mt-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business">
            <div className="grid md:grid-cols-3 gap-8">
              {businessSteps.map((step) => (
                <Card
                  key={step.number}
                  className="p-8 relative hover:shadow-xl transition-shadow border-2 hover:border-accent"
                >
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 mt-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorks;
