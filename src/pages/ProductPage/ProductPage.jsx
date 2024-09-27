import { useSelector } from "react-redux";
import style from "./ProductPage.module.css";
import { useState } from "react";

const ProductPage = ({ product_ID }) => {
  const [item, setItem] = useState(null);
  const products = useSelector((store) => store.product_list.product_list);
  

  return <div>{item?.title}</div>;
};

export default ProductPage;
