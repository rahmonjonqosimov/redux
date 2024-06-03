import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const [products, setProducts] = useState(null);
  const [next, setNext] = useState(1);
  const [count, setCount] = useState(5);
  console.log(next);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products", {
        params: {
          limit: count,
          skip: next * 5,
        },
      })
      .then((res) => setProducts(res?.data?.products))
      .catch((err) => console.log(err));
  }, [next, count]);
  const data = {
    labels: products?.map((el) => el.title),
    datasets: [
      {
        label: "Qolgan mahsulotlar soni",
        data: products?.map((el) => el.stock),
        backgroundColor: [
          "#107B80",
          "#8D6D8A",
          "#E4BA21",
          "#E6842A",
          "#5274A1",
          "#879C59",
          "#82DA5B",
          "#840884",
          "#0004",
          "#BACB9F",
        ],
        borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container chart">
      <div className="chart__container">
        <Pie data={data} />
        <div className="chart__btns">
          <button disabled={next <= 1} onClick={() => setNext((p) => p - 1)}>
            Prev
          </button>

          <select onChange={(e) => setCount(+e.target.value)} name="" id="">
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <button disabled={next >= 10} onClick={() => setNext((p) => p + 1)}>
            Next
          </button>
        </div>
      </div>

      <h3>single route va serach qoshildi</h3>
    </div>
  );
}
