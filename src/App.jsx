import React from "react";
import Button from "./components/Button";
import ProductCard from "./components/ProductCard";
import PRODUCT_DATA from "./data/products";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  const [products, setProducts] = useState(PRODUCT_DATA);
  const [categories, setCategories] = useState([]);
  const [displayAll, setDisplayAll] = useState(true);

  //@disc: handles click event to the category buttons
  const handleCategoryClick = (category) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({
        ...product,
        selected:
          product.category === category ? !product.selected : product.selected,
      }))
    );

    setCategories((prevCategories) =>
      prevCategories.map((cat) => ({
        ...cat,
        selected: cat.btn === category ? !cat.selected : cat.selected,
      }))
    );
    setDisplayAll(false);
  };
  //utils functions
  // @disc: returns categories from the data
  const getCategories = (products) => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];

    return uniqueCategories.map((category) => ({
      btn: category,
      onClick: () => handleCategoryClick(category),
      selected: false,
    }));
  };
  useEffect(() => {
    const allUnselected = products.every((item) => item.selected === false);
    if (allUnselected) setDisplayAll(true);
  }, [products]);

  useEffect(() => {
    setCategories(getCategories(PRODUCT_DATA));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayProducts = displayAll
    ? PRODUCT_DATA
    : products.filter((product) => product.selected);

  return (
    <section>
      <div className="flex justify-center my-10 gap-3">
        {categories.map((item, i) => (
          <Button
            key={i}
            onClick={item.onClick}
            className={
              item.selected ? `bg-black text-white` : `bg-white text-black`
            }
          >
            {item.btn}
          </Button>
        ))}
      </div>
      <div className="flex p-3 gap-5 flex-wrap justify-center">
        {displayProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default App;
