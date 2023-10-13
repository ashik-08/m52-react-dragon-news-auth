import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {title, image_url, details, _id} = news;

    return (
        <div>
            <h2>{title}</h2>
            <img src={image_url} alt="" />
            {
                details.length > 200 ? 
                <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-orange-400">Read More...</Link></p>
                :
                <p>{details}</p>
            }
        </div>
    );
};

export default NewsCard;