import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-pri-text text-xl font-semibold">All Category</h2>
      <p className="text-sm md:text-lg font-medium space-y-8 mt-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            // to={`category/${category.id}`}
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block text-pri-text font-semibold bg-brk-news-bg px-12 py-4 rounded"
                : "block text-sec-text px-12"
            }
          >
            {category.name}
          </NavLink>
        ))}
      </p>
    </div>
  );
};

export default LeftSideNav;
