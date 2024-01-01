// BorrowItems.jsx

import MainDisplayLayout from "../../../Components/Layout/MainDisplay/MainDisplayLayout";
import BorrowForm from "./BorrowForm";
import React, { useState } from "react";
import BorrowConfirm from "./BorrowConfirm";
import BorrowStepper from "./BorrowStepper";
import BorrowSuccess from "./BorrowSuccess";

function BorrowItems() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(null);
  const [successStep, setSuccessStep] = useState(false);

  // Next
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  
  // Back
  const handleBack = () => {
    if (successStep) {
      // If in success step, go back to form
      setSuccessStep(false);
      setActiveStep(0);
    } else {
      // Otherwise, go back one step
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  // Submit
  const handleFormSubmit = (data) => {
    setFormData(data);
    handleNext();
  };
  
  // Confirm
  const handleConfirm = () => {
    setSuccessStep(true);
    handleNext();
  };

  return (
    <MainDisplayLayout>
      <BorrowStepper activeStep={activeStep} />
      {activeStep === 0 && !successStep && (
        <BorrowForm onSubmitProp={handleFormSubmit} />
      )}
      {activeStep === 1 && !successStep && (
        <BorrowConfirm
          data={formData}
          onBack={handleBack}
          onConfirm={handleConfirm}
        />
      )}
      {successStep && (
        <BorrowSuccess onBack={handleBack} />
      )}
    </MainDisplayLayout>
  );
}

export default BorrowItems;
