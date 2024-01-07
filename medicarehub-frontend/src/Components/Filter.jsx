import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";

 
const Filter = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat; 
        	// comparing category for displaying data
    });
    setItem(newItem);
  };
  return (
    <>
      <div className="container-fluid filter1">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Choose Hospital as per the Top Cities</h1>
          <Buttons 
          menuItems={menuItems}
          filterItem={filterItem}
          setItem={setItem}
          >
          </Buttons>
          <Card item={item} />
        </div>
      </div>
    </>
  );
};
 
export default Filter;