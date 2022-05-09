import React from "react";
import classes from "./account-settings.module.scss";
import Box from "../../reusable/box";

const DeleteAccount = () => {
  return (
    <Box title="Close Account" style={classes["delete-account-box"]}>
      <p>Delete your account and account data.</p>

      <button>CLOSE ACCOUNT</button>
    </Box>
  );
};

export default DeleteAccount;
