import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </>
  );
};

/*
    react-router provides useNavigate hook to navigate programmatically.
    call the hook within the component and use the returned function to
    navigate passing in either a path (order-summary here) or a number
    (-1 in OrdarSummary.js) that indicates a change in the history stack.
    If we want to replace the history, pass in the optional second argument
    with replace set to true. 
*/