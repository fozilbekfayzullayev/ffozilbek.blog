import { useParams } from "react-router-dom";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../services/api";
import { GetDate } from "../components";

const BlogPostPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['blogs', id],
    queryFn: () => fetchBlogById(id)
  });


  return (
    <div className="max-w-[680px] w-full sm:px-[20px] px-0 mx-auto mt-[40px]">
      <div className="mb-[30px] flex justify-start">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[16px] text-second-text hover:text-orange transition-colors duration-200">
          &larr; Orqaga
        </Link>
      </div>
      {isLoading && "Yuklanmoqda..."}
      {data && <div className="mb-[60px]">
        <h1 className="text-[2.5rem] font-semibold text-heading capitalize mb-[5px]">
          {data.title}
        </h1>
        <div className="timer text-[14px] text-second-text mb-[30px]">{<GetDate isoDate={data.createdAt}/>}</div>
        <p className="leading-[1.5] tracking-[0.08rem] whitespace-pre-line">{data.content}</p>
      </div>}


      <div className="max-w-[400px] w-full mx-auto shadow-md rounded-[10px] p-[20px] mb-[40px]">
        <h3 className="font-bold">Agar!</h3>
        Izohlaringiz bo'lsa{" "}
        <Link className="text-blue-500" to={"https://t.me/wzworld"} target="_blank">
          yozishingiz
        </Link>{" "}
        mumkin
      </div>
    </div>
  );
};

export default BlogPostPage;
