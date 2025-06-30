import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function NotFound() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setCount(count - 1), 1000);
    if (count == 0) navigate("/");
  }, [count]);
  return <div>NotFound {count}</div>;
}

export default NotFound;
