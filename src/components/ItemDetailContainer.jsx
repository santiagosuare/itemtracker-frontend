import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Spinner } from "react-bootstrap";
import API from "../api/Api";

const ItemDetailContainer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAllItems = async () => {
    const Item = await API.getAllItems();
    return Item;
  };

  useEffect(() => {
    getAllItems()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <ItemDetail item={data} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
