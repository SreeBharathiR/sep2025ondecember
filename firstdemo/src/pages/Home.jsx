import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://dummyjson.com/products");
  //     console.log(response);
  //     const result = await response.json();
  //     console.log(result);
  //     setData(result);
  //   } catch (e) {
  //     console.error("Error fetch data: ", e);
  //   }
  // };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res);
      setData(res.data);
    } catch (e) {
      console.error("Error fetch data: ", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Home</div>;
};

export default Home;
