import Typography from "@mui/material/Typography";
import InnerContainer from "./InnerContainer";
import React from "react";
import { Button, Grid } from "@mui/material";

function BorrowConfirm({ onBack, onConfirm, data }) {
  return (
    <InnerContainer>
      <div className="overall">
        <div className="label-confirmation">
          <div className="header" style={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              style={{ paddingBottom: "15px", fontWeight: "bold" }}
            >
              Confirmation
            </Typography>
          </div>
          <div className="paragraph" style={{ textAlign: "center" }}>
            <Typography variant="h6" style={{ paddingBottom: "1.5%" }}>
              Please take a moment to confirm the details below. Your prompt
              verification is greatly appreciated.
            </Typography>
          </div>
        </div>

        <div className="first-row">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div
                className="label-borrow-summary"
                style={{ textAlign: "center" }}
              >
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
              <div className="endorsed" style={{paddingLeft: "25.7%"}}>
                <strong> Endorsed By: </strong> {data.endorser}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="office" style={{paddingLeft: "25.7%"}}>
                <strong> Office: </strong> {data.offices}{" "}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="purpose" style={{paddingLeft: "25.7%"}}>
                <strong> Purpose: </strong> {data.purposes}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="start-date-bt" style={{paddingLeft: "25.7%"}}>
                <strong>Start Date: </strong>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="return-date-bt" style={{paddingLeft: "25.7%"}}>
                <strong>Return Date: </strong>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="second-row">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div
                className="label-item-summary"
                style={{ paddingTop: "2%", textAlign: "center" }}
              >
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
              <div className="item-label" style={{ textAlign: "center" }}>
                {/* Borrowed Items here */} Borrowed Items Here
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="quantity-label" style={{ textAlign: "center" }}>
                {/* Quantity of Borrowed Items here */} Quantity Here
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="button" style={{ paddingTop: "3%"  , textAlign:"center"}}>
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
    </InnerContainer>
  );
}

export default BorrowConfirm;
