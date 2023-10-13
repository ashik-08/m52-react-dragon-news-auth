import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-4 bg-brk-news-bg mt-8 p-4">
      <span className="bg-latest-bg text-white text-lg font-medium px-5 py-2">
        Latest
      </span>
      <Marquee className="text-pri-text text-lg font-semibold" pauseOnHover={true} speed={80}>
        <Link to="/" className="mr-10">I can be a React </Link>
        <Link to="/" className="mr-10">component, multiple React components,</Link>
        <Link to="/" className="mr-10">or just some text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
