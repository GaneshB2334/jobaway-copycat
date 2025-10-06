import { Card } from "@/components/ui/card";

const team = [
  { name: "Tom Oliver", role: "Founder", image: "https://i.pravatar.cc/400?img=12" },
  { name: "Loenard Barnes", role: "Lead Engineer", image: "https://i.pravatar.cc/400?img=13" },
  { name: "Gilbert Sherman", role: "Sale Manager", image: "https://i.pravatar.cc/400?img=14" },
  { name: "Franklin Bailey", role: "Art Director", image: "https://i.pravatar.cc/400?img=15" },
  { name: "Azizi Dai", role: "Assistant Director", image: "https://i.pravatar.cc/400?img=16" },
  { name: "Ashitaka Dai", role: "Art Director", image: "https://i.pravatar.cc/400?img=17" },
  { name: "Diarmuid Eoin", role: "Sale Manager", image: "https://i.pravatar.cc/400?img=18" },
];

const Team = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Meet The Team
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member) => (
            <Card
              key={member.name}
              className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-accent group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
