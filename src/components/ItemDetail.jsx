import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Item from "./Item";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="container d-flex justify-content-center aling-items-center h-180">
        <div className="row">
          {item.map((item) => (
            <div className="col-md-3" key={item.id}>
              <Item item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
