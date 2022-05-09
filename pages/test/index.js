import React from "react";
import classes from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { testActions } from "../../redux/actions/test-actions";

const TestPage = () => {
  const dispatch = useDispatch();
  const profileArray = useSelector((state) => state.test);
  console.log(profileArray);

  return (
    <main className={classes["test-page"]}>
      <h1>TEST PAGE</h1>

      <ul className={classes.list}>
        {profileArray.map((profile, index) => (
          <li className={classes["profile-item"]} key={index}>
            <div
              className={classes.bubble}
              onClick={() => dispatch(testActions(profile))}
            >
              <div
                className={`${
                  profile.isSelected === true ? classes.fill : undefined
                }`}
              ></div>
            </div>
            {profile.label}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TestPage;
