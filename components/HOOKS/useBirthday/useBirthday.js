import { addBasePath } from "next/dist/shared/lib/router/router";
import React, { useState, useEffect } from "react";
import useIsMounted from "../useIsMounted";
import validation from "./validation";

const useBirthday = () => {
  const isMounted = useIsMounted();
  const [values, setValues] = useState({
    day: "",
    month: "",
    year: "",

    monthIndex: "",
  });

  const [selectedField, setSelectedField] = useState("");

  const date = new Date();
  const currentYear = date.getFullYear();

  const numberOfDays = new Date(
    +values.year,
    +values.monthIndex + 1,
    0
  ).getDate();
  const days = [];
  for (let i = 1; i <= numberOfDays; i++) {
    days.push(i);
  }

  const years = [];
  for (let i = 1940; i <= currentYear - 18; i++) {
    years.push(i);
  }

  const BIRTHDAY_ARRAY = [
    {
      label: "day",
      values: days,
    },

    {
      label: "month",
      values: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },

    {
      label: "year",
      values: years.reverse(),
    },
  ];

  const [fullBirhday, setFullBirthday] = useState(``);
  useEffect(() => {
    if (+values.day > numberOfDays) {
      setValues({ ...values, day: numberOfDays });
    }
    setFullBirthday(`${values.day}.${values.monthIndex + 1}.${values.year}`);
  }, [values.month, values.year, values.day]);

  const selectedFieldHandler = (item) => {
    setSelectedField(item);
    if (selectedField === item) {
      setSelectedField("");
    }
  };

  const onSelectHandler = (label, value, index) => {
    if (label === "day") {
      setValues({ ...values, day: value });
    }

    if (label === "month") {
      setValues({ ...values, month: value, monthIndex: index });
    }

    if (label === "year") {
      setValues({ ...values, year: value });
    }
  };

  const displayedValue = (label) => {
    if (label === "day" && values.day) {
      return values.day;
    } else if (label === "day" && !values.day) {
      return "day";
    }

    if (label === "month" && values.month) {
      return values.month;
    } else if (label === "month" && !values.month) {
      return "month";
    }
    if (label === "year" && values.year) {
      return values.year;
    } else if (label === "year" && !values.year) {
      return "year";
    }
  };

  isMounted &&
    selectedField !== "" &&
    selectedField &&
    window.addEventListener("click", (e) => {
      setSelectedField("");
    });

  const [birthdayErrors, setBirthdayErrors] = useState("");
  const birthdayIsSubmitted = () => {
    setBirthdayErrors(validation(values));
  };

  const birthdayHasErrors = validation(values);

  return {
    BIRTHDAY_ARRAY: BIRTHDAY_ARRAY,
    selectedFieldHandler: selectedFieldHandler,
    selectedField: selectedField,
    onSelectHandler: onSelectHandler,
    values: values,
    displayedValue: displayedValue,
    birthdayErrors: birthdayErrors,
    birthdayIsSubmitted,
    birthdayHasErrors: birthdayHasErrors,
    fullBirhday: fullBirhday,
  };
};

export default useBirthday;
