import { useEffect, useState } from "react";
import Navigation from "../../components/NagivationBar/Navigation";
import style from "./HomePage.module.css";

import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [data, setData] = useState([]); // Initialize state as an empty array
  const [query, setQuery] = useState("jewelery"); //initial query state for the API
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
        setData(result);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query]);

  return (
    <div className={style.homepage}>
      <Navigation query={query} setQuery={setQuery} />
      <div className={style.main_container}>
        <div className={style.header}>
          <p className={style.result_text}>Results</p>
          <div>4 Products Found</div>
        </div>
        <div className={style.product_container}>
          {data.map((card) => (
            <ProductCard
              title={card.title}
              key={card.id}
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
