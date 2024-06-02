import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import numberBrm from "number-brm";
import { BsCart, BsHeartFill, BsHeart, BsCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggleHeart, addToCart } from "../../context/action/action";

const Product = ({ data, loading, title, setLimit, btn }) => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 700);
  const dispatch = useDispatch();
  const wishes = useSelector((s) => s.heart);
  const cart = useSelector((s) => s.cart);
  const product = data?.map((item) => (
    <div key={item?.id} className="product">
      <div className="product__img">
        {item?.images.length <= 1 ? (
          <img
            src={item?.images[0]}
            alt={item?.title}
            className={`img ${loader ? "img_loading" : "img_loading_disabled"}`}
          />
        ) : (
          <>
            <img
              src={item?.images[0]}
              alt={item?.title}
              className={`product__img-1 img`}
            />
            <img
              src={item?.images[1]}
              alt={item?.title}
              className="product__img-2 img"
            />
          </>
        )}
        <div className="top">TOP</div>
        <button onClick={() => dispatch(addToCart(item))} className="cart">
          {cart?.some((el) => el.id === item.id) ? (
            <BsCartFill style={{ color: "#0009" }} />
          ) : (
            <BsCart />
          )}
        </button>
        <button onClick={() => dispatch(toggleHeart(item))} className="heart">
          {wishes?.some((el) => el.id === item.id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart />
          )}
        </button>
      </div>
      <p title={item?.description} className="product__desc">
        {item?.description}
      </p>
      <div className="product__rating">
        <FaStar className="star" />
        <span>{item?.rating}</span>
        <span>{item?.stock} ta xarid</span>
      </div>
      <h4 className="product__price">
        {(item?.price * 12500).brm("int", 1)} UZS
      </h4>
    </div>
  ));
  return (
    <div className="container">
      <h2>{title}</h2>

      <div className="wrapper">{product}</div>
      {btn ? (
        <div style={{ textAlign: "center" }}>
          <button onClick={() => setLimit((p) => p + 1)} className="btn">
            {loading ? "Loading..." : "Yanada ko'proq ko'rish"}
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;
