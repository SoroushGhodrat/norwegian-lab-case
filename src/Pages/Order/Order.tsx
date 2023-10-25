import { Div, Product } from "./Order.style";
import ProductImg from "../../assets/cl-box-product.png";
import Footer from "../../shared/components/Footer/Footer";
import OrderForm from "../../shared/components/Form/OrderFrom";
import { useEffect, useRef } from "react";

const Order = () => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <Div id="best-seller" ref={bottomRef}>
        <h2>Our best seller</h2>
      </Div>

      <Product>
        <img src={ProductImg} alt="Product" />
      </Product>

      <OrderForm />


    </>
  );
};

export default Order;
