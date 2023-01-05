import styled from "styled-components";
import { useState, useEffect } from "react";
import { getOrders } from "../../Utils/Apis";
import Loader from "../../components/Main/Loader";

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState();
  useEffect(() => {
    const responce = async () => {
      setLoading(true);
      try {
        const { data } = await getOrders();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    responce();
  }, []);

  return (
    <Wrapper>
      <Tittle>Orders</Tittle>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ul>
            {orders.map((order) => {
              return (
                <li key={order._id}>
                  <span>{order.orderName}</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div({
  width: "100%",

  minHeight: " 70vh",
  background: "rgba(49, 47, 48, 0.8)",

  padding: "0",
  borderRadius: "5px",
  boxShadow: "7px 10px 5px #fa5f064d",
});
const Tittle = styled.h3({
  color: "#FF6B0B",
});
export default Orders;
