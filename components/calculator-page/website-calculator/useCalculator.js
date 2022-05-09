import React, { useState, useEffect } from "react";
import validate from "./validatePrice";

function useCalculator(value, label) {
  const [option, setOption] = useState(value);
  const [name, setName] = useState(label);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    setPrices(validate(name, option));
  }, []);

  return { option, name, prices };
}

export default useCalculator;
