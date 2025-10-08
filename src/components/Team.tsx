const team = [
  { name: "Pravin Kumar", role: "Chairman", image: "https://navarna.com/public/assetsfront/img/11.jpg" },
  { name: "Kamal Chib", role: "Board President", image: "https://navarna.com/public/assetsfront/img/22.jpg" },
  { name: "Anil Pratham,Ex. DGP Gujrat", role: "Advisor to Board", image: "https://navarna.com/public/assetsfront/img/33.jpg" },
  { name: "Amresh Kumar Mishra", role: "Managing Director", image: "https://navarna.com/public/assetsfront/img/4.jpg" },
  { name: "Himanshu Kaushik", role: "Chief Executive Officer(CEO)", image: "https://navarna.com/public/assetsfront/img/5.jpg" },
  { name: "Amit Kumar", role: "Alliance Director", image: "https://navarna.com/public/assetsfront/img/6.jpg" },
  { name: "G.R. Pradhan", role: "Alliance Director", image: "https://navarna.com/public/assetsfront/img/7.jpg" },
  { name: "Ashutosh Mourya", role: "Alliance Director", image: "https://navarna.com/public/assetsfront/img/8.jpg" },
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: '#2d1bb5' }}>Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Meet The Team
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-200 group cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2d1bb5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;