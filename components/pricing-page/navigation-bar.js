import React from "react";
import classes from "./pricing.module.scss";
import { foundersData } from "../../data/founders-data";
import { useDispatch, useSelector } from "react-redux";
import { getPricingUserAction } from "../../redux/actions/pricing-actions";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const selectedPricingUser = useSelector((state) => state.selectedPricingUser);

  return (
    <ul className={classes["navigation-bar"]}>
      {foundersData.map((member, index) => (
        <li
          key={index}
          onClick={() => dispatch(getPricingUserAction(member.id))}
          className={
            selectedPricingUser === member.id ? classes.active : undefined
          }
        >
          {member.name.split(" ")[1]}
        </li>
      ))}
    </ul>
  );
};

export default NavigationBar;
