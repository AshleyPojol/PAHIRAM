// BorrowStepper.jsx

import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import InnerContainer from "./InnerContainer";

const BorrowStepper = ({ activeStep }) => { // Receive activeStep as a prop
  const steps = ["Borrowing Form", "Confirmation"];

  return (
    <InnerContainer>
      <div className="outer-box" style={{ width: "100%" }}>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "5px",
            paddingTop: "10px",
          }}
        >
          <Box>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              style={{ transform: "scale(1.5)", width: "50vh" }} 
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
      </div>
    </InnerContainer>
  );
}

export default BorrowStepper;
