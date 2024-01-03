import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";

import {
  MenuItem,
  Typography,
  FormControl,
  TextField,
  Select,
  Button,
  Grid,
} from "@mui/material";

import InnerContainer from "./InnerContainer";

const offices = [
  { value: "Building Management Office", label: "Building Management Office" },
  {
    value: "Information Technology Resource Office",
    label: "Information Technology Resource Office",
  },
  {
    value: "Engineering and Science Laboratory Office",
    label: "Engineering and Science Laboratory Office",
  },
];

const itemsByOffice = {
  "Building Management Office": ["Spalding Basketball", "Mikasa Volleyball"],
  "Information Technology Resource Office": [
    "Nikon D300",
    "Profoto B10 Plus Strobe Lights",
  ],
  "Engineering and Science Laboratory Office": [
    "Pyrex Beaker",
    "Pyrex Graduated Cylinder",
  ],
};

const purposes = [
  {
    value: "Academic Purposes - Assignment & Activities",
    label: "Academic Purposes - Assignment & Activities",
  },
  {
    value: "Academic Purposes - Midterms & Finals",
    label: "Academic Purposes - Midterms & Finals",
  },
  { value: "Organization Purposes", label: "Organization Purposes" },
  { value: "Special Events", label: "Special Events" },
  { value: "Others", label: "Others" },
];

const endorser = [
  {
    value: "Ms. Roselle Wednesday Gardon",
    label: "Ms. Roselle Wednesday Gardon",
  },
  { value: "Sir. Jojo Castillo", label: "Sir. Jojo Castillo" },
  { value: "Ms. Maryjane Lopez", label: "Ms. Maryjane Lopez" },
  { value: "Ms. Mary Ann Gomez", label: "Ms. Mary Ann Gomez" },
  { value: "Ms. Maryjoy Padua", label: "Ms. Maryjoy Padua" },
];

const BorrowForm = ({ onSubmitProp }) => {
  const { control, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      items: [""],
      "start-date-item": [""],
      "return-date-item": [""],
      quantity: "",
    },
  });

  const handleAddItem = () => {
    setValue("items", [...getValues("items"), ""]);
    setValue("start-date-item", [...getValues("start-date-item"), ""]);
    setValue("return-date-item", [...getValues("return-date-item"), ""]);
    setValue("quantity", "");
  };

  const selectedOffice = watch("offices");
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const handlePurposeChange = (value) => {
    setIsOtherSelected(value === "Others");
  };

  const handleFormSubmit = (data) => {
    console.log("The Borrowing Data:", data);
    onSubmitProp(data);
  };

  const handleNext = () => {
    handleFormSubmit(getValues());
  };

  return (
    <InnerContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="overall" style={{ width: "80%" }}>
          {/* Borrowing Transaction Row */}
          <div className="borrowing-transaction-row">
            <Typography
              className="borrow-tg"
              style={{ fontSize: "24px", paddingBottom: "16px" }}
            >
              Borrowing Transaction
            </Typography>
            <Grid container spacing={12}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {" "}
                  {/* -- Borrowing Transaction Row */}
                  <Grid item xs={6}>
                    {" "}
                    {/* -- Endorser : Start --  */}
                    <div className="endorser">
                      <FormControl style={{ width: "100%" }}>
                        <InputLabel
                          id="endorsed-By"
                          style={{ paddingLeft: "8px", fontSize: "16px" }}
                        >
                          Endorsed By
                        </InputLabel>
                        <Controller
                          name="endorser"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Endorsor is required",
                          }}
                          render={({ field, fieldState }) => (
                            <>
                              <Select {...field} variant="outlined">
                                {endorser.map((option) => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Select>
                              <FormHelperText
                                style={{
                                  fontSize: "12px",
                                  paddingLeft: "16px",
                                }}
                              >
                                Teacher/Organization Head Name
                              </FormHelperText>
                              {fieldState.error && (
                                <FormHelperText
                                  error
                                  style={{
                                    fontSize: "12px",
                                    paddingLeft: "16px",
                                  }}
                                >
                                  {fieldState.error.message}
                                </FormHelperText>
                              )}
                            </>
                          )}
                        />
                      </FormControl>
                    </div>
                  </Grid>{" "}
                  {/* -- Endorsor : End -- */}
                  <Grid item xs={6}>
                    {""}

                    {/* Office Start  */}
                    <div className="office">
                      <FormControl style={{ width: "100%" }}>
                        <InputLabel
                          id="office"
                          style={{ paddingLeft: "8px", fontSize: "16px" }}
                        >
                          Office
                        </InputLabel>
                        <Controller
                          name="offices"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Borrowing Office is required",
                          }}
                          render={({ field, fieldState }) => (
                            <>
                              <Select
                                {...field}
                                variant="outlined"
                                label="Office"
                                style={{ width: "100%" }}
                              >
                                {offices.map((office) => (
                                  <MenuItem
                                    key={office.value}
                                    value={office.value}
                                  >
                                    {office.label}
                                  </MenuItem>
                                ))}
                              </Select>

                              <FormHelperText
                                style={{
                                  fontSize: "12px",
                                  paddingLeft: "16px",
                                }}
                              >
                                Borrowing Office
                              </FormHelperText>
                              {fieldState.error && (
                                <FormHelperText
                                  error
                                  style={{
                                    fontSize: "12px",
                                    paddingLeft: "16px",
                                  }}
                                >
                                  {fieldState.error.message}
                                </FormHelperText>
                              )}
                            </>
                          )}
                        />
                      </FormControl>
                    </div>
                  </Grid>{" "}
                  {/* Office End */}
                  <Grid item xs={12}>
                    {" "}
                    {/* Purpose Start*/}
                    <div className="purpose">
                      <FormControl style={{ width: "100%" }}>
                        <InputLabel
                          id="purpose"
                          style={{ paddingLeft: "8px", fontSize: "16px" }}
                        >
                          Purpose
                        </InputLabel>

                        <Controller
                          name="purposes"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Purpose is required",
                          }}
                          render={({ field, fieldState }) => (
                            <>
                              <Select
                                variant="outlined"
                                style={{ width: "100%" }}
                                {...field}
                                label="Purpose"
                                onChange={(e) => {
                                  field.onChange(e);
                                  handlePurposeChange(e.target.value);
                                }}
                              >
                                {purposes.map((purpose) => (
                                  <MenuItem
                                    key={purpose.value}
                                    value={purpose.value}
                                  >
                                    {purpose.label}
                                  </MenuItem>
                                ))}
                              </Select>
                              <FormHelperText
                                style={{
                                  fontSize: "12px",
                                  paddingLeft: "16px",
                                }}
                              >
                                Purpose of Borrowing
                              </FormHelperText>
                              {fieldState.error && (
                                <FormHelperText
                                  error
                                  style={{
                                    fontSize: "12px",
                                    paddingLeft: "16px",
                                  }}
                                >
                                  {fieldState.error.message}
                                </FormHelperText>
                              )}
                            </>
                          )}
                        />
                      </FormControl>
                    </div>
                  </Grid>{" "}
                  {/* Purpose End */}
                  <Grid item xs={12}>
                    {" "}
                    {/* Other Purpose Start  */}
                    {isOtherSelected && (
                      <div className="specific-purpose">
                        <FormControl style={{ width: "100%" }}>
                          <Controller
                            control={control}
                            name="specific-purpose"
                            defaultValue=""
                            rules={{
                              required: "Specific Purpose is required",
                            }}
                            render={({ field, fieldState }) => (
                              <>
                                <TextField
                                  style={{ width: "100%" }}
                                  variant="outlined"
                                  label="Specific Purpose"
                                  {...field}
                                />
                                <FormHelperText
                                  style={{
                                    fontSize: "12px",
                                    paddingLeft: "16px",
                                  }}
                                >
                                  Specify the Purpose
                                </FormHelperText>
                                {fieldState.error && (
                                  <FormHelperText
                                    error
                                    style={{
                                      fontSize: "12px",
                                      paddingLeft: "16px",
                                    }}
                                  >
                                    {fieldState.error.message}
                                  </FormHelperText>
                                )}
                              </>
                            )}
                          />
                        </FormControl>
                      </div>
                    )}
                  </Grid>{" "}
                  {/* Other Purpose End */}
                  <Grid item xs={6}>
                    {" "}
                    {/* Start Date : Start */}
                    <div className="date-pickers">
                      <FormControl
                        variant="outlined"
                        style={{ minWidth: "100%" }}
                      >
                        <Typography style={{ paddingBottom: "8px" }}>
                          Starting Date
                        </Typography>
                        <Controller
                          control={control}
                          defaultValue=""
                          name="start-date"
                          rules={{ required: "Starting Date is required" }}
                          render={({ field, fieldState }) => (
                            <>
                              <DatePicker
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                              />
                              {fieldState.error && (
                                <FormHelperText
                                  error
                                  style={{
                                    fontSize: "12px",
                                    paddingLeft: "16px",
                                  }}
                                >
                                  {fieldState.error.message}
                                </FormHelperText>
                              )}
                            </>
                          )}
                        />
                      </FormControl>
                    </div>
                  </Grid>{" "}
                  {/* Start Date End */}
                  <Grid item xs={6}>
                    {" "}
                    {/* Return Date Start */}
                    <div className="date-pickers">
                      <FormControl
                        variant="outlined"
                        style={{ minWidth: "100%" }}
                      >
                        <Typography style={{ paddingBottom: "8px" }}>
                          Returning Date
                        </Typography>
                        <Controller
                          control={control}
                          defaultValue=""
                          name="return-date"
                          rules={{ required: "Returning Date is required" }}
                          render={({ field, fieldState }) => (
                            <>
                              <DatePicker
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                              />
                              {fieldState.error && (
                                <FormHelperText
                                  error
                                  style={{
                                    fontSize: "12px",
                                    paddingLeft: "16px",
                                  }}
                                >
                                  {fieldState.error.message}
                                </FormHelperText>
                              )}
                            </>
                          )}
                        />
                      </FormControl>
                    </div>
                  </Grid>{" "}
                  {/* Return Date End */}
                </Grid>{" "}
                {/* Borrowing Transaction Row End */}
                {getValues("items").map((_, index) => (
                  <Grid container spacing={0.2} key={index}>
                    <Grid item xs={6}>
                      <div
                        className="label"
                        style={{
                          position: "relative",
                          top: "10px",
                          height: "100%",
                        }}
                      >
                        <Typography
                          style={{
                            fontSize: "24px",
                            paddingTop: "24px",
                            paddingBottom: "32px",
                          }}
                          className="item-tg"
                        >
                          Item Transaction
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div
                        className="button-add"
                        style={{
                          paddingLeft: "75%",
                          position: "relative",
                          top: "36%",
                          height: "100%",
                        }}
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleAddItem}
                        >
                          Add Item
                        </Button>
                      </div>
                    </Grid>

                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <div className="item-name">
                          <FormControl style={{ width: "100%" }}>
                            <InputLabel
                              id="item-name"
                              style={{
                                paddingLeft: "8px",
                                fontSize: "16px",
                              }}
                            >
                              Item Name
                            </InputLabel>
                            <Controller
                              name={`items[${index}]`}
                              control={control}
                              defaultValue=""
                              rules={{ required: "Item Name is required" }}
                              render={({ field, fieldState }) => (
                                <>
                                  <Select
                                    variant="outlined"
                                    {...field}
                                    label="Equipment Name"
                                    style={{ width: "100%" }}
                                  >
                                    {itemsByOffice[selectedOffice]?.map(
                                      (item) => (
                                        <MenuItem key={item} value={item}>
                                          {item}
                                        </MenuItem>
                                      )
                                    )}
                                  </Select>
                                  <FormHelperText
                                    style={{
                                      fontSize: "12px",
                                      paddingLeft: "16px",
                                    }}
                                  >
                                    Choose an Item to Borrow
                                  </FormHelperText>
                                  {fieldState.error && (
                                    <FormHelperText
                                      error
                                      style={{
                                        fontSize: "12px",
                                        paddingLeft: "16px",
                                      }}
                                    >
                                      {fieldState.error.message}
                                    </FormHelperText>
                                  )}
                                </>
                              )}
                            />
                          </FormControl>
                        </div>
                      </Grid>

                      <Grid item xs={6}>
                        <div className="quantity">
                          <FormControl style={{ width: "100%" }}>
                            <Controller
                              control={control}
                              defaultValue=""
                              rules={{ required: "Quantity is required" }}
                              name={`quantity[${index}]`}
                              render={({ field, fieldState }) => (
                                <>
                                  <TextField
                                    style={{ width: "100%" }}
                                    id="outlined-number"
                                    type="number"
                                    variant="outlined"
                                    label="Quantity"
                                    {...field}
                                  />
                                  <FormHelperText
                                    style={{
                                      fontSize: "12px",
                                      paddingLeft: "16px",
                                    }}
                                  >
                                    Item Quantity
                                  </FormHelperText>
                                  {fieldState.error && (
                                    <FormHelperText
                                      error
                                      style={{
                                        fontSize: "12px",
                                        paddingLeft: "16px",
                                      }}
                                    >
                                      {fieldState.error.message}
                                    </FormHelperText>
                                  )}
                                </>
                              )}
                            />
                          </FormControl>
                        </div>
                      </Grid>

                      <Grid item xs={6}>
                        <div className="start-date-item">
                          <FormControl style={{ width: "100%" }}>
                            <Typography style={{ paddingBottom: "8px" }}>
                              Starting Date
                            </Typography>
                            <Controller
                              control={control}
                              defaultValue=""
                              rules={{ required: "Starting Date is required" }}
                              name={`start-date-item[${index}]`}
                              render={({ field, fieldState }) => (
                                <>
                                  <DatePicker
                                    placeholderText="Select date"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                  />
                                  {fieldState.error && (
                                    <FormHelperText
                                      error
                                      style={{
                                        fontSize: "12px",
                                        paddingLeft: "16px",
                                      }}
                                    >
                                      {fieldState.error.message}
                                    </FormHelperText>
                                  )}
                                </>
                              )}
                            />
                          </FormControl>
                        </div>
                      </Grid>

                      <Grid item xs={6}>
                        <div className="return-date-item">
                          <FormControl style={{ width: "100%" }}>
                            <Typography style={{ paddingBottom: "8px" }}>
                              Returning Date
                            </Typography>
                            <Controller
                              control={control}
                              defaultValue=""
                              rules={{ required: "Returning Date is required" }}
                              name={`return-date-item[${index}]`}
                              render={({ field, fieldState }) => (
                                <>
                                  <DatePicker
                                    style={{ width: "100%" }}
                                    placeholderText="Select date"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                  />
                                  {fieldState.error && (
                                    <FormHelperText
                                      error
                                      style={{
                                        fontSize: "12px",
                                        paddingLeft: "16px",
                                      }}
                                    >
                                      {fieldState.error.message}
                                    </FormHelperText>
                                  )}
                                </>
                              )}
                            />
                          </FormControl>
                        </div>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <div
                        className="button-add"
                        style={{
                          paddingTop: "16px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={handleSubmit(handleNext)}
                        >
                          Submit
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>
        </div>
      </LocalizationProvider>
    </InnerContainer>
  );
};

export default BorrowForm;