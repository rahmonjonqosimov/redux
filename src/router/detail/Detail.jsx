import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../../components/single-product/SingleProduct";

const SingleRoute = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setData(res.data));
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SingleProduct data={data} />
    </>
  );
};

export default SingleRoute;
