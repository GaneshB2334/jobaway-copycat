import { Calendar } from "lucide-react";

const news = [
  {
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=410&h=270&fit=crop",
    date: "July 10, 2024",
    title: "Provide guidance on crafting effective resumes and cover",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=410&h=270&fit=crop",
    date: "July 10, 2024",
    title: "Detail any internship or graduate programs you offer",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=410&h=270&fit=crop",
    date: "July 10, 2024",
    title: "Use relevant keywords to improve the blog's visibility in",
  },
];

const News = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="font-semibold text-sm uppercase tracking-wider mb-2" style={{ color: '#2d1bb5' }}>Media</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            Latest News
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((article, index) => (
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
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h4 
                  className="text-xl font-bold text-gray-900 transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2d1bb5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#111827';
                  }}
                >
                  {article.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;