import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios(productsUrl);
      const resp2 = await axios(randomUserUrl);
      console.log(resp2);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">global instance</h2>
      <button className="btn btn-warning m-3">
        <Link to="/">Back home</Link>
      </button>
      ;
    </div>
  );
};
export default GlobalInstance;
