import React from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const state = useSelector((state) => state);

  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
