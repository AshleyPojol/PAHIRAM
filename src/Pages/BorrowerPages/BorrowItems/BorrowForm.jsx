import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import { useFormData } from "./FormDataContext";
import InnerContainer from "./InnerContainer";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import BorrowSuccess from "./BorrowSuccess";

function BorrowForm({ onNext }) {
  const { formData, setForm } = useFormData();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [equipmentInfo, setEquipmentInfo] = useState({
    equipmentName: "",
    equipmentModel: "",
    equipmentQuantity: "",
    equipmentOffice: "",
    equipmentPurpose: "",
    equipmentSerial: "",
  });

  const [otherInfo, setOtherInfo] = useState({
    startDate: null,
    endDate: null,
  });

  const [validation, setValidation] = useState({
    equipmentName: true,
    equipmentModel: true,
    equipmentQuantity: true,
    equipmentOffice: true,
    equipmentPurpose: true,
    equipmentSerial: true,
    startDate: true,
    endDate: true,
  });

  const handleTextFieldChange = (field, value) => {
    setEquipmentInfo((prev) => ({ ...prev, [field]: value }));
    setValidation((prev) => ({ ...prev, [field]: !!value.trim() }));
  };

  const isFormValid = () => {
    return (
      validation.equipmentName &&
      validation.equipmentModel &&
      validation.equipmentQuantity &&
      validation.equipmentOffice &&
      validation.equipmentPurpose &&
      validation.equipmentSerial &&
      validation.startDate &&
      validation.endDate
    );
  };
  const handleSubmit = () => {
    setIsFormSubmitted(true);
    

    if (isFormValid()) {
      const formattedFormData = {
        equipmentName: equipmentInfo.equipmentName,
        equipmentModel: equipmentInfo.equipmentModel,
        equipmentQuantity: equipmentInfo.equipmentQuantity,
        equipmentOffice: equipmentInfo.equipmentOffice,
        equipmentPurpose: equipmentInfo.equipmentPurpose,
        equipmentSerial: equipmentInfo.equipmentSerial,
        startDate: otherInfo.startDate
          ? dayjs(otherInfo.startDate).format("YYYY-MM-DD")
          : "",
        endDate: otherInfo.endDate
          ? dayjs(otherInfo.endDate).format("YYYY-MM-DD")
          : "",
      };

      setForm(formattedFormData);
      onNext(formattedFormData);
    } else {
      // Display a warning message or take appropriate action
      alert("Complete the form before going to the next step");
      setIsFormSubmitted(false);
    }
  };

  const handleStartDateChange = (date) => {
    setOtherInfo((prev) => ({ ...prev, startDate: date }));
    console.log("Start Date:", date);
  };

  const handleEndDateChange = (date) => {
    setOtherInfo((prev) => ({ ...prev, endDate: date }));
    console.log("End Date:", date);
  };

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

  const offices = [
    {
      value: "ITRO",
      label: "Information Technology Resources Office",
    },
    {
      value: "BMO",
      label: "Building Maintenance Office",
    },
    { 
      value: "ESLO",
      label: "Engineering and Science Laboratory Office",
    },
  ];

  const purpose = [
    {
      value: "ORG",
      label: "Organizational Events",
    },
    {
      value: "EXAM",
      label: "Examination Purpose",
    },
    {
      value: "ACAD",
      label: "Academic Purposes",
    },
    {
      value: "EXTRA",
      label: "Extracurricular Activities",
    },
  ];

  return (
    <InnerContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography
          variant="h3"
          style={{ paddingBottom: "20px", fontWeight: "bold" }}
        >
          Borrowing Form
        </Typography>
        <div
          className="overall"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            {[
              "equipmentName",
              "equipmentModel",
              "equipmentQuantity",
              "equipmentSerial",
            ].map((field) => (
              <TextField
                key={field}
                id={field}
                name={field}
                type={field === "equipmentQuantity" ? "number" : "text"}
                label={fieldLabels[field]}
                value={equipmentInfo[field]}
                onChange={(e) => handleTextFieldChange(field, e.target.value)}
                fullWidth
                variant="outlined"
                style={{ marginBottom: "20px" }}
                error={!validation[field]}
                helperText={!validation[field] && "This field is required"}
                InputProps={{ style: { fontSize: "16px" } }}
              />
            ))}

            {["equipmentOffice", "equipmentPurpose"].map((field) => (
              <div key={field} style={{ marginBottom: "20px" }}>
                {field === "equipmentOffice" ? (
                  <FormControl fullWidth>
                    <InputLabel id="select-office-label">
                      Office-In-Charge
                    </InputLabel>
                    <Select
                      labelId="select-office-label"
                      id="select-office"
                      label="Office-In-Charge"
                      value={equipmentInfo.equipmentOffice}
                      onChange={(e) =>
                        handleTextFieldChange(field, e.target.value)
                      }
                    >
                      {offices.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (
                  <TextField
                    id="select-purpose"
                    label={fieldLabels[field]}
                    value={equipmentInfo[field]}
                    onChange={(e) =>
                      handleTextFieldChange(field, e.target.value)
                    }
                    variant="outlined"
                    select
                    fullWidth
                  >
                    {purpose.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </div>
            ))}

            <div
              style={{
                display: "flex",
                gap: "20px",
                paddingBottom: "20px",
                justifyContent: "center",
              }}
            >
              <div>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label={fieldLabels["startDate"]}
                    TextField={(params) => <TextField {...params} />}
                    type="date"
                    value={otherInfo["startDate"]}
                    onChange={(date) => handleStartDateChange(date)}
                    style={{ marginBottom: "20px" }}
                  />
                </DemoContainer>
              </div>
              <div>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label={fieldLabels["endDate"]}
                    TextField={(params) => <TextField {...params} />}
                    type="date"
                    value={otherInfo["endDate"]}
                    onChange={(date) => handleEndDateChange(date)}
                    style={{ marginBottom: "20px" }}
                  />
                </DemoContainer>
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={isFormValid() ? handleSubmit : null}
                style={{ width: "200px" }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </LocalizationProvider>
    </InnerContainer>
  );
}

export default BorrowForm;
