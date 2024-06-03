import React, { useEffect, useState } from "react";
import Product from "../../components/products/Product";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
const Wishlist = () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 1000);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const wishes = useSelector((s) => s.heart);
  return (
    <motion.div
      initial={{ transform: "translate(100%, 0)" }}
      animate={{ transform: "translate(0, 0)" }}
      exit={{ transform: "translate(100%, 0)", transition: { duration: 0.1 } }}
    >
      {loader ? (
        <Loading />
      ) : wishes.length ? (
        <Product
          btn={false}
          loading={false}
          setLimit={null}
          data={wishes}
          title={"Sevimlilar"}
        />
      ) : (
        <h2 className="empty__wishes">Sevimlilar hozircha yo'q</h2>
      )}
    </motion.div>
  );
};

export default Wishlist;
