import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const News = () => {
  const { id, image_url } = useParams();
  const singleNews = useLoaderData();
  console.log(singleNews);
  return (
    <section>
      <Header></Header>
      <div className="grid grid-cols-4 mt-8">
        <div className="col-span-3">
          <h2 className="text-pri-text text-xl font-semibold">Dragon News</h2>
          <div>
            <p>{id}</p>
            <img src={singleNews.image_url} alt="" />
            <p>{singleNews.title}</p>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </section>
  );
};

export default News;
