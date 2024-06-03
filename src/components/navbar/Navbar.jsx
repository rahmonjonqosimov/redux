import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3, BsHeart, BsPieChart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const wishes = useSelector((s) => s.heart);
  const cart = useSelector((s) => s.cart);
  const [data, setData] = useState(null);
  const [shrink, setShrink] = useState(false);
  const [value, setValue] = useState("");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${value}`)
      .then((res) => setData(res.data.products));
  }, [value]);
  const searchItems = data?.map((item) => (
    <div
      onClick={() => (navigate(`/products/${item.id}`), setValue(""))}
      key={item?.id}
      style={{ cursor: "pointer" }}
      className="search__item"
    >
      <img width={100} src={item?.images[0]} alt={item?.title} />
      <p>{item?.description}</p>
    </div>
  ));

  return (
    <section className={`header ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <nav className="navbar">
          <Link className="nav__logo" to={"/"}>
            AliExpress
          </Link>
          <div className={`nav__serach ${value ? "serach__border" : ""}`}>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="search"
              placeholder="Search..."
              required
            />
            <button>Qidirib topilsin</button>
            {value ? <div className="serach__item">{searchItems}</div> : <></>}
          </div>
          <ul>
            <li className="nav__link">
              <Link to={"/wishlist"}>
                <BsHeart />
                Sevimlilar
              </Link>
              <sup className="wishes__count">{wishes.length}</sup>
            </li>
            <li className="nav__link">
              <Link to={"/cart"}>
                <BsCart3 />
                Savat
              </Link>
              <sup>{cart.length}</sup>
            </li>
            <li className="nav__link">
              <Link to={"/chart"}>
                <BsPieChart />
                Chart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {value.trim() ? (
        <div onClick={() => setValue("")} className="serach__overley"></div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Navbar;
