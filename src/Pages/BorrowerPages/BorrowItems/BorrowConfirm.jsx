// BorrowConfirm.jsx
import React from "react";
import Typography from "@mui/material/Typography";
import InnerContainer from "./InnerContainer";
import { Button } from "@mui/material";

const fieldLabels = {
  equipmentName: "Equipment Name",
  equipmentModel: "Equipment Model",
  equipmentQuantity: "Equipment Quantity",
  equipmentOffice: "Office-In-Charge",
  equipmentPurpose: "Purpose of Borrowing",
  equipmentSerial: "Serial Number",
  startDate: "Starting Date",
  endDate: "Returning Date",
};

function BorrowConfirm({ formData, onBack, onConfirm }) {
  return (
    <InnerContainer>
      <Typography
        variant="h3"
        style={{ paddingBottom: "15px", fontWeight: "bold" }}
      >
        Confirmation
      </Typography>
      <Typography variant="h6" style={{ paddingBottom: "15px" }}>
        Please take a moment to confirm the details below. Your prompt
        verification is greatly appreciated.
      </Typography>
      <div
        className="label"
        style={{ paddingRight: "150px", paddingBottom: "15px" }}
      >
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} style={{ marginBottom: "10px" }}>
            <Typography variant="inherit" style={{ lineHeight: "2" }}>
              {fieldLabels[key]}: {value}
            </Typography>
          </div>
        ))}
      </div>
      <div className="button">
        <Button
          variant="contained"
          color="primary"
          onClick={onBack}
          style={{ width: "200px" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onConfirm}
          style={{ width: "200px", marginLeft: "10px" }}
        >
          Confirm
        </Button>
      </div>
    </InnerContainer>
  );
}

export default BorrowConfirm;
