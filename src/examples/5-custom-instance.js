import { useEffect } from "react";
import { Link } from "react-router-dom";
import authFetch from "../axios/custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("/react-store-products");
      const resp2 = await axios(randomUserUrl);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">custom instance</h2>
      <button className="btn btn-warning m-3">
        <Link to="/">Back home</Link>
      </button>
      ;
    </div>
  );
};
export default CustomInstance;
