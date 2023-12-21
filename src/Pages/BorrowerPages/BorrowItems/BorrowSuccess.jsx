import React from "react";
import InnerContainer from "./InnerContainer";
import { Button } from "@mui/material";

const BorrowSuccess = ({ onBack }) => {
  return (
    <InnerContainer>
      <div>
        <h2>Success!</h2>
        <p>
          Your request has been received successfully. Thank you for your
          submission.
        </p>
        <p>Want another transaction?</p>
      </div>
      <Button variant="contained" color="primary" onClick={onBack}>
        Back
      </Button>
    </InnerContainer>
  );
};

export default BorrowSuccess;
