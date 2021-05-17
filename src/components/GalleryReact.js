import React, { useState } from "react";
import "./tab.css";
import Menu from "./Menu";

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (timeing) => {
    const updatedItem = Menu.filter((data, index) => {
      return data.category === timeing;
    });
    setItems(updatedItem);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />
      <div className="menu-tab container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Lunch")}
          >
            Lunch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>
            All
          </button>
        </div>
      </div>
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem, index) => {
                const { id, name, image, description, price } = elem;
                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="row item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img
                          src={image}
                          alt="menupics"
                          className="image-fluid"
                        />
                      </div>
                      <div className="col-12 col-md-12 col-lg-8 ">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div className="menu-price-book d-flex justify-content-between">
                          <h2>Price : {price} </h2>
                          <a href=" ">
                            <button className="btn btn-primary">
                              Order Now
                            </button>
                          </a>
                        </div>
                        <p className="outp">
                          *Prices may vary on selected date.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
