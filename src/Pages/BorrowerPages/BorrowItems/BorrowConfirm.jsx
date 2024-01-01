import Typography from "@mui/material/Typography";
import InnerContainer from "./InnerContainer";
import React from "react";
import { Button, Grid } from "@mui/material";

function BorrowConfirm({ onBack, onConfirm, data }) {

  return (
    <InnerContainer>
      <div
        className="overall"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div className="label-para">
          <div className="confirm-label">
            <Typography
              variant="h3"
              style={{ paddingBottom: "15px", fontWeight: "bold" }}
            >
              Confirmation
            </Typography>
          </div>
          <div className="paragrap-confirm">
            <Typography variant="h6" style={{ paddingBottom: "15px" }}>
              Please take a moment to confirm the details below. Your prompt
              verification is greatly appreciated.
            </Typography>
          </div>
        </div>
        <div className="summary">
          <div className="borrow-trans">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="label-borrow-summary">
                  <Typography
                    variant="h4"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Borrowing Summary
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="endorsed">
                  <strong> Endorsed By: </strong> {data.endorser}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="office">
                  <strong> Office: </strong> {data.offices} </div>
              </Grid>
              <Grid item xs={12}>
                <div className="purpose">
                  <strong> Purpose: </strong> {data.start-date}
                  </div>
              </Grid>
              <Grid item xs={12}>
                <div className="start-date-bt">
                   <strong>Start Date: </strong>
                  </div>
              </Grid>
              <Grid item xs={12}>
                <div className="return-date-bt">
                   <strong>Return Date: </strong>
                  </div>
              </Grid>
            </Grid>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="label-item-summary" style={{ paddingTop: "8px" }}>
                <Typography
                  variant="h4"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Item Summary
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="item-label">
                {/* Borrowed Items here */} Borrowed Items Here
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="quantity-label">
                {/* Quantity of Borrowed Items here */} Quantity Here
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="button" style={{ paddingTop: "8px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="back">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={onBack}
                  style={{ width: "200px" }}
                >
                  Back
                </Button>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="confirm">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={onConfirm}
                  style={{ width: "200px" }}
                >
                  Confirm
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </InnerContainer>
  );
}

export default BorrowConfirm;
