import React, { useState, useEffect } from "react";
import classes from "./date-input.module.scss";
import { FaCalendarAlt } from "react-icons/fa";
import useIsMounted from "../../HOOKS/useIsMounted";

const DateInput = (props) => {
  const isMounted = useIsMounted();
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [monthIndex, setMonthIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");

  const [selectedField, setSelectedField] = useState("");

  const date = new Date();
  const year = date.getFullYear();
  const MONTHS = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septembrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie",
  ];
  const YEARS = [];
  for (let i = 1940; i <= year - 18; i++) {
    YEARS.push(i);
  }

  const nrOfDays = new Date(selectedYear, monthIndex + 1, 0).getDate();
  const DAYS = [];
  for (let i = 1; i <= nrOfDays; i++) {
    DAYS.push(i);
  }

  useEffect(() => {
    if (selectedDay > nrOfDays) {
      setSelectedDay(nrOfDays);
    }
  }, [selectedMonth, selectedYear]);

  isMounted &&
    window.addEventListener("click", (e) => {
      setSelectedField("");
    });

  return (
    <div className={`${classes.container} ${props.containerStyle}`}>
      <p>{props.label}</p>
      <div className={`${classes.inputs} ${props.inputsStyle}`}>
        {/* //! day */}
        <div
          className={`${classes.input} ${props.inputStyle}`}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedField("day");
            if (selectedField === "day") {
              setSelectedField("");
            }
          }}
        >
          <p>{selectedDay ? selectedDay : "day"}</p>
          {selectedField === "day" && (
            <ul className={`${classes.dropdown} ${props.dropdownStyle}`}>
              {DAYS.map((day, index) => (
                <li
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedField("");
                    setSelectedDay(day);
                  }}
                >
                  {day}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* //! month */}
        <div
          className={`${classes.input} ${props.inputStyle}`}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedField("month");
            if (selectedField === "month") {
              setSelectedField("");
            }
          }}
        >
          <p>{selectedMonth ? selectedMonth : "month"}</p>
          {selectedField === "month" && (
            <ul className={`${classes.dropdown} ${props.dropdownStyle}`}>
              {MONTHS.map((month, index) => (
                <li
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMonth(month);
                    setSelectedField("");
                    setMonthIndex(index);
                  }}
                >
                  {month}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* //! year  */}
        <div
          className={`${classes.input} ${props.inputStyle}`}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedField("year");
            if (selectedField === "year") {
              setSelectedField("");
            }
          }}
        >
          <p>{selectedYear ? selectedYear : "year"}</p>
          {selectedField === "year" && (
            <ul className={`${classes.dropdown} ${props.dropdownStyle}`}>
              {YEARS.map((year, index) => (
                <li
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedYear(year);
                    setSelectedField("");
                  }}
                >
                  {year}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateInput;
