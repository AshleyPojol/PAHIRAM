import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Button,
} from "@mui/material";
import InnerContainer from "./InnerContainer";

const complete = [
  {
    barcode: "20230102-GCYR-APM",
    endorsedBy: "Nathaniel Christian Mendoza",
    office: "Engineering and Science Laboratory Office",
    purpose: "Academic Purpose Midterms & Finals"
  }
];

const active = [
  {
    barcode: "20230102-NKCAM-APM",
    endorsedBy: "Roselle Wednesday Gardon",
    office: "Information Technology Resource Office",
    purpose: "Academic Purposes Midterms & Finals",
  },
  {
    barcode: "20230102-TABAL-OP",
    endorsedBy: "Patrick Lita",
    office: "Building Management Office",
    purpose: "Organization Purposes",
  },
  {
    barcode: "20230102-BKPYR-APQ",
    endorsedBy: "Kimberly Cruz",
    office: "Engineering and Science Laboratory Office",
    purpose: "Academic Purposes Assignment - Quizzes",
  },
];

const remarks = [
  {
    completed: "The item has been returned successfully."
  },
  {
    incompleted: "The item has not been returned, but a penalty was paid."
  },
];

function BorrowTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActiveData = active.filter((item) =>
    item.barcode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCompleteData = complete.filter((item) =>
    item.barcode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  return (
    <InnerContainer>
      <div className="overall">
        <div className="search-bar">
          <div
            style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "2%" }}
          >
            <TextField
              sx={{ minWidth: "90%" }}
              type="text"
              variant="standard"
              placeholder="Search Transaction ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ padding: "0.5rem" }}
            />
            <Button variant="contained">Search</Button>
          </div>
        </div>
        <div className="active-trans" style={{ paddingTop: "1%" }}>
          <Typography
            gutterBottom
            style={{
              fontSize: "24px",
              paddingLeft: "2%",
            }}
          >
            Active Transaction
          </Typography>

          <Grid container spacing={2}>
            {filteredActiveData.map((item) => (
              <Grid item xs={4} key={item.barcode}>
                <Box sx={{ height: "auto" }}>
                  <div className="card-active" style={{ paddingLeft: "10%" }}>
                    <Card
                      sx={{
                        height: "100%",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      <CardContent
                        style={{ fontSize: "12px", whiteSpace: "pre-line " }}
                      >
                        <Typography
                          variant="h3"
                          style={{ paddingBottom: "1%" }}
                        >
                          {item.barcode}
                        </Typography>
                        <strong> Endorsed By:</strong> {item.endorsedBy}
                        <br />
                        <strong> Office:</strong> {item.office}
                        <br />
                        <strong> Purpose:</strong> {item.purpose}
                      </CardContent>
                    </Card>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="completed-transaction">
          <Typography
            gutterBottom
            style={{
              fontSize: "24px",
              paddingLeft: "2%",
              paddingTop: "1%"
            }}
          >
            Completed Transaction
          </Typography>
          <Grid container spacing={2}>
            {filteredCompleteData.map((item) => (
              <Grid item xs={4} key={item.barcode}>
                <Box sx={{ height: "auto" }}>
                  <div
                    className="first-card-completed"
                    style={{ paddingLeft: "10%" }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      <CardContent style={{ fontSize: "12px" }}><Typography
                          variant="h3"
                          style={{ paddingBottom: "1%" }}
                        >
                          {item.barcode}
                        </Typography>
                        <strong> Endorsed By:</strong> {item.endorsedBy || ""} <br />
                        <strong> Office:</strong> {item.office || ""} <br />
                        <strong> Purpose:</strong> {item.purpose || ""} <br />
                        <strong> Remarks:</strong> The item has been returned successfully.
                      </CardContent>
                    </Card>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </InnerContainer>
  );
}

export default BorrowTable;
