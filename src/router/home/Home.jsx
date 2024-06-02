import React, { useEffect, useState } from "react";
import Product from "../../components/products/Product";
import { motion } from "framer-motion";
import axios from "axios";
import Banner from "../../components/banner/";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(1);
  const [data, setData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products`, {
        params: {
          limit: limit * 5,
        },
      })
      .then((res) => setData(res?.data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [limit]);

  return (
    <motion.div
      initial={{ transform: "translate(-100%, 0)" }}
      animate={{ transform: "translate(0, 0)" }}
      exit={{ transform: "translate(-100%, 0)", transition: { duration: 0.1 } }}
    >
      <Banner />
      <Product
        setLimit={setLimit}
        title={"Products"}
        loading={isLoading}
        data={data?.products}
        btn={true}
      />
    </motion.div>
  );
};

export default Home;
