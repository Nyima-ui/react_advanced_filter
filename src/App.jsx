import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const pseudoDataForButtons = [
    { btn: "Bags", onClick: `handleBags`, selected: false },
    { btn: "Watches", onClick: `handleWatches`, selected: false },
  ];
  const pseudodata = [
    { company: "Prada", category: "Bags", displaying: true },
    { company: "Gucci", category: "Bags", displaying: true },
    { company: "Guess", category: "Bags", displaying: true },
    { company: "Roles", category: "Watches", displaying: true },
    { company: "Timex", category: "Watches", displaying: true },
    { company: "Nike", category: "Sports", displaying: true },
    { company: "Adidas", category: "Sports", displaying: true },
    { company: "Fila", category: "Sports", displaying: true },
    { company: "Ray Ban", category: "Sunglasses", displaying: true },
    { company: "Aldo", category: "Sunglasses", displaying: true },
    { company: "Polaroid", category: "Sunglasses", displaying: true },
  ];
  const [data, setData] = useState(pseudodata);
  const [categories, setCategories] = useState([]);

  //@disc: function to toggle displaying

  //@disc: handles click event to the category buttons
  const handleBtnClick = (category) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.category !== category) {
          return { ...item, displaying: !item.displaying };
        }
        return item;
      })
    );

    setCategories((prev) =>
      prev.map((item) => {
        if (item.btn === category) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };
  //utils functions
  // @disc: returns categories from the data
  const getCategories = (array) => {
    const uniqueCategories = new Set();
    array.forEach((item) => uniqueCategories.add(item.category));

    const categoriesArray = Array.from(uniqueCategories).map((category) => ({
      btn: category,
      onclick: () => handleBtnClick(category),
      selected: false,
    }));

    setCategories(categoriesArray);
  };
  //reusable component
  //@disc returns a styled button
  const Button = ({ children, className, onClick }) => {
    return (
      <button
        className={`${className} cursor-pointer px-[0.8rem] py-[0.1rem] border rounded-[0.256rem] transition-all duration-150 ease-in hover:shadow-[3px_3px_1.2px_rgb(0,0,0)] border-zinc-500`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  useEffect(() => {
    getCategories(pseudodata);
  }, []);

  return (
    <section>
      <div className="flex justify-center my-10 gap-3">
        {categories.map((item, i) => (
          <Button key={i} onClick={item.onclick} className={item.selected ? `bg-black text-white` : `bg-white text-black`}>
            {item.btn}
          </Button>
        ))}
      </div>
      <div className="flex p-3 gap-5 flex-wrap justify-center">
        {data.map(
          (item, i) =>
            item.displaying && (
              <div
                className="border py-1 px-2 min-w-[9rem] rounded-sm space-y-2 border-zinc-700"
                key={i}
              >
                <h1 className="text-lg text-gray-600">{item.company}</h1>
                <p className="text-sm text-gray-600">{item.category}</p>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default App;
