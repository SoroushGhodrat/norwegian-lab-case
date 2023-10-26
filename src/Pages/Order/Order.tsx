import { Div, Product } from "./Order.style";
import ProductImg from "../../assets/cl-box-product.png";

import OrderForm from "../../shared/components/Form/OrderFrom";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Order = () => {
  const { t } = useTranslation();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Div id="best-seller" ref={bottomRef}>
        <h2>{t("localization:product")}</h2>
      </Div>

      <Product>
        <img src={ProductImg} alt="Product" />
      </Product>

      <OrderForm />
    </>
  );
};

export default Order;
