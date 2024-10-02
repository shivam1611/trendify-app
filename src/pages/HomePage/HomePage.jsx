import { useEffect, useState } from "react";
import Navigation from "../../components/NagivationBar/Navigation";
import style from "./HomePage.module.css";

import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { storeProduct } from "../../Features/Product_slice/product_list";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product_list.product_list);
  const [query, setQuery] = useState("women's clothing"); //initial query state for the API
  const [loading, setLoading] = useState(false); //loader state

  useEffect(() => {
    async function getData() {
      window.scrollTo(0, 0);
      setLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${query}`
        );
        if (!response.ok) {
          alert("Error Occured!!");
        }

        const result = await response.json();
        dispatch(storeProduct(result));
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query, dispatch]);

  return (
    <div className={style.homepage}>
      <Navigation query={query} setQuery={setQuery} />
      <div className={style.main_container}>
        <div className={style.header}>
          <p className={style.result_text}>Results</p>
          <div>{products.length} Products Found</div>
        </div>
        <div className={style.product_container}>
          {products.map((card) => (
            <ProductCard
              title={card.title}
              key={card.id}
              product_id={card.id}
              rating={card.rating.rate}
              count={card.rating.count}
              price={card.price}
              image_url={card.image}
            />
          ))}
        </div>
        {loading && <Loader />}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
