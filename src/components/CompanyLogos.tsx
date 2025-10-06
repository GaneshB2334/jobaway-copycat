const companies = [
  { name: "The Telegraph", logo: "https://placehold.co/180x50/e5e7eb/1f2937?text=The+Telegraph" },
  { name: "Warner Bros", logo: "https://placehold.co/180x50/e5e7eb/1f2937?text=Warner+Bros" },
  { name: "Net-A-Porter", logo: "https://placehold.co/180x50/e5e7eb/1f2937?text=NET-A-PORTER" },
  { name: "Brand Studio", logo: "https://placehold.co/180x50/e5e7eb/1f2937?text=BrandStudio" },
  { name: "Highsnobiety", logo: "https://placehold.co/180x50/e5e7eb/1f2937?text=HIGHSNOBIETY" },
];

const CompanyLogos = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60 hover:opacity-100 transition-opacity">
          {companies.map((company) => (
            <div key={company.name} className="grayscale hover:grayscale-0 transition-all">
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
