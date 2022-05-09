import React from "react";
import classes from "./right.module.scss";
import Box from "../../reusable/box";

const Right = () => {
  return (
    <div className={classes.right}>
      {/* //! <-- date of call */}
      <Box title="Date of call">
        <div className={classes["date-wrapper"]}>
          <div className={classes.date}>
            <span>29.09.2021</span>
          </div>
        </div>

        <div className={classes.text}>
          <p>Confirmed Call</p>
        </div>
      </Box>
      {/* //! --> */}

      {/* //! <-- projects */}
      <Box title="Projects files">
        <ul className={classes["items-container"]}>
          <li className={classes.project}>
            <div className={classes.image}></div>
            <div className={classes.title}>
              <p>title.pdf</p>
            </div>
          </li>

          <li className={classes.project}>
            <div className={classes.image}></div>
            <div className={classes.title}>
              <p>title.pdf</p>
            </div>
          </li>

          <li className={classes.project}>
            <div className={classes.image}></div>
            <div className={classes.title}>
              <p>title.pdf</p>
            </div>
          </li>
        </ul>
      </Box>
      {/* //! --> */}

      {/* //! <-- projects by us */}
      <Box title="Projects files by CA23">
        <ul className={classes["items-container"]}>
          <li className={classes["project"]}>
            <div className={classes.image}></div>
            <div className={classes.title}>
              <p>title.pdf</p>
            </div>
          </li>

          <li className={classes["project"]}>
            <div className={classes.image}></div>
            <div className={classes.title}>
              <p>title.pdf</p>
            </div>
          </li>

          <li className={classes["project"]}>
            <div className={classes.image}></div>
            <div className={classes.title}>
              <p>title.pdf</p>
            </div>
          </li>
        </ul>
      </Box>
      {/* //! --> */}

      {/* //! <-- invoice */}
      <Box title="Invoice">
        <div className={classes["pay-now"]}>
          <h4>PAY NOW</h4>
          <p>6000$</p>
        </div>

        <div className={classes["button-wrapper"]}>
          <div className={classes.button}>
            <p>PAY NOW</p>
          </div>
        </div>
      </Box>
      {/* //! --> */}

      {/* //! <-- paied invoices */}
      <Box title="Paid invoices">
        <ul className={classes["items-container"]}>
          <li className={classes["project"]}>
            <div className={classes.image}></div>
            <div className={classes.title}>
              <p>title.pdf</p>
            </div>
          </li>

          <li className={classes["project"]}>
            <div className={classes.image}></div>
            <div className={classes.title}>
              <p>title.pdf</p>
            </div>
          </li>

          <li className={classes["project"]}>
            <div className={classes.image}></div>
            <div className={classes.title}>
              <p>title.pdf</p>
            </div>
          </li>
        </ul>
      </Box>
      {/* //! --> */}

      {/* //! <-- payment */}
      <Box title="Payment"></Box>
      {/* //! --> */}

      {/* //! <-- messages */}
      <Box title="Messages"></Box>
      {/* //! --> */}
    </div>
  );
};

export default Right;
