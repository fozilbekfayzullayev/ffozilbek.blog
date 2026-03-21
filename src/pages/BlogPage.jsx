import {BlogsCard, GetDate} from "../components"
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../services/api";
import { Link } from "react-router";

const BlogPage = () => {
  const { data: groupedPosts, isLoading, isError } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
    select: (data) => {
      const grouped = {};
      const sortedData = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      sortedData.forEach(item => {
        const year = new Date(item.createdAt).getFullYear();
        if (!grouped[year]) {
          grouped[year] = [];
        }
        grouped[year].push(item);
      });
      return grouped;
    }
  });

  const years = groupedPosts ? Object.keys(groupedPosts).sort((a, b) => b - a) : [];

  return (
    <div className="pt-[40px] md:pt-[60px]">
      <div className="relative flex justify-center items-center mb-[40px]">
        <Link to="/" className="absolute left-0 inline-flex items-center gap-2 text-[16px] text-second-text hover:text-orange transition-colors duration-200">
          &larr; Orqaga
        </Link>
        <h1 className="text-[2rem] text-heading font-heading font-semibold m-0">
          Blogs
        </h1>
      </div>
      
      {isLoading ? <div className="text-center text-[1.125rem] text-second-text font-medium tracking-wide animate-pulse py-[40px]">Yuklanmoqda...</div> : (
        <div>
          {years.map(year => (
            <div key={year} className="mb-[40px] last:mb-0">
              <div className="w-[100px] mx-auto text-center mb-[20px] bg-orange text-white font-semibold rounded-[10px]">
                {year}
              </div>
              <div className="flex flex-col gap-y-[20px]">
                {groupedPosts[year].map(item => (
                  <BlogsCard 
                    key={item.id} 
                    title={item.title} 
                    id={item.id} 
                    date={<GetDate isoDate={item.createdAt}/>}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
