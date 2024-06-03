import React, { useEffect, useState } from "react";
import numberBrm from "number-brm";
import { MdDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion";
import {
  removeFromCart,
  incrementCart,
  decrementCart,
} from "../../context/action/action";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 500);
  const cart = useSelector((s) => s.cart);

  const cartItems = cart?.map((item) => (
    <div key={item?.id} className="cart__item">
      <img
        src={item.images[0]}
        width={100}
        alt=""
        className={`${loader ? "img_loading" : "img_loading_disabled"}`}
      />
      <p title={item?.description}>{item?.description}</p>
      <div className="count">
        <button
          disabled={item?.quantity <= 1}
          onClick={() => dispatch(decrementCart(item))}
        >
          -
        </button>
        <span>{item?.quantity}</span>
        <button
          disabled={item?.quantity >= 10}
          onClick={() => dispatch(incrementCart(item))}
        >
          +
        </button>
      </div>
      <div className="product__pirce">
        <h4>{(item?.price * 12500).brm("int", 1)} UZS</h4>
        <p>{(item?.price * 12500 * item?.quantity).brm("int", 1)} UZD</p>
      </div>
      <button className="delete" onClick={() => dispatch(removeFromCart(item))}>
        <MdDeleteOutline />
      </button>
    </div>
  ));
  const cartImage = cart?.map((item) => (
    <img key={item.id} src={item?.images[0]} alt={item?.title} />
  ));
  const sum = cart.reduce((acc, el) => acc + el.price * 12500 * el.quantity, 0);
  return (
    <motion.div
      initial={{ transform: "translate(100%, 0)" }}
      animate={{ transform: "translate(0, 0)" }}
      exit={{ transform: "translate(100%, 0)", transition: { duration: 0.1 } }}
    >
      <div className="container">
        <h2>Savat</h2>
        <div className="cart__page">
          {cart.length ? (
            <div className="cart__wrapper">{cartItems}</div>
          ) : (
            <h2 className="empty__basket">Savatda hech narsa yo'q</h2>
          )}

          <div className="cart__order">
            <h4>Buyurtmani rasmiylashtirish</h4>
            <div className="images__wrapper">{cartImage}</div>
            <div className="hr"></div>
            <div className="product__count">
              <p>{cart.length} ta mahsulot</p>
              <p>{sum.brm("int", 1)} UZS</p>
            </div>
            <div className="product__count">
              <p>Yetkazib berish</p>
              <p>{cart.length ? "30 000 UZS" : "0 UZS"}</p>
            </div>
            <button>
              Rasmiylashtirishga{" "}
              <span>
                {" "}
                {cart.length ? (sum + 30000).brm("int", 1) : "0"} UZS
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
