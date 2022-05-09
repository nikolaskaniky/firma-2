import React, { useState } from "react";
import classes from "./table.module.scss";
import { foundersData } from "../../../data/founders-data";
import { useSelector } from "react-redux";
import useStickyState from "../../HOOKS/sticky-state";

const Table = () => {
  const selectedPricingUser = useSelector((state) => state.selectedPricingUser);
  const member = foundersData.find(
    (member) => member.id === selectedPricingUser
  );

  const [selectedProgram, setSelectedProgram] = useStickyState(
    member.table[0].type,
    "selectedProgram"
  );
  const selectedProgramHandler = (type) => setSelectedProgram(type);

  return (
    <section className={classes.table}>
      <ul className={classes["program-bar"]}>
        {member.table.map((item, index) => (
          <li key={index} onClick={() => selectedProgramHandler(item.type)}>
            <h4>{item.program} ore</h4>
            <p>{item.type}</p>
            <div
              className={`${classes.box} ${
                selectedProgram === item.type ? classes.selected : undefined
              }`}
            >
              <h1>{item.pricePerHour}E</h1>
            </div>
          </li>
        ))}
      </ul>

      {member.table.map(
        (item, index) =>
          selectedProgram === item.type && (
            <div className={classes.description}>
                <div className={classes.title}>
                    <p>Prestez {item.program} pe zi.</p>    
                </div>

                <div className={classes.text}>
                    <p>{item.description}</p>    
                </div>

              <div className={classes.pricing}>
                <p>Pe ora - {item.pricePerHour} euro</p>
                <p>Pe zi - {item.program * item.pricePerHour} euro</p>
                <p>
                  Pe saptamana - {item.program * 5 * item.pricePerHour} euro
                </p>
                <p>Pe 2 saptamani - {item.program * 10 * item.pricePerHour}</p>
                <p>Pe luna - {item.program * 20 * item.pricePerHour} euro</p>
                <p>Pe 3 luni - {item.program * 60 * item.pricePerHour} euro</p>
                <p>Pe 6 luni - {item.program * 120 * item.pricePerHour} euro</p>
                <p>Pe 9 luni - {item.program * 180 * item.pricePerHour} euro</p>
                <p>Pe 1 an - {item.program * 240 * item.pricePerHour} euro</p>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default Table;
