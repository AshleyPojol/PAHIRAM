import React, { useState } from "react";
import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import BorrowForm from "./BorrowForm";
import BorrowConfirm from "./BorrowConfirm";
import BorrowSuccess from "./BorrowSuccess";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import InnerContainer from "./InnerContainer";
import { FormDataProvider } from "./FormDataContext";


const steps = ["Fill-up Borrowing Form",  "Confirmation of Details"];

function BorrowItems() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData(data);
    setActiveStep((prevActiveStep) =>
      prevActiveStep < steps.length - 1 ? prevActiveStep + 1 : prevActiveStep
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleConfirm = () => {
    // Handle confirmation logic if needed
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBackToForm = () => {
    setActiveStep(0); // Go back to the first step
  };


  return (
    <FormDataProvider>
      <MainDisplayLayout>
        <InnerContainer>
          <div className="stepper-container" style={{ width: "70vh" }}>
            <Stepper activeStep={activeStep} className="custom-stepper">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </InnerContainer>

        <div className="form-confirm" style={{ paddingTop: "25px" }}>
          {activeStep === 0 && <BorrowForm onNext={handleNext} />}
          {activeStep === 1 && (
            <BorrowConfirm formData={formData} onBack={handleBack} onConfirm={handleConfirm} />
          )}
          {activeStep === 2 && <BorrowSuccess onBack={handleBackToForm} />}
        </div>
      </MainDisplayLayout>
    </FormDataProvider>
  );
}

export default BorrowItems;