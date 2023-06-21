import { useEffect } from "react";
import { Link } from "react-router-dom";
import authFetch from "../axios/interceptors";

const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch("/react-store-productss");
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">Interceptors</h2>
      <button className="btn btn-warning m-3">
        <Link to="/">Back home</Link>
      </button>
      ;
    </div>
  );
};
export default Interceptors;
