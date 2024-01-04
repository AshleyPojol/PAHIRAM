import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Button,
  CardActionArea,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import InnerContainer from "./InnerContainer";


const complete = [
  {
    barcode: "20200102-GCYR-APM",
    endorsedBy: "Nathaniel Christian Mendoza",
    office: "Engineering and Science Laboratory Office",
    purpose: "Academic Purpose Midterms & Finals",
    startdate: "January 01, 2020",
    enddate: "January 03, 2020",
    itemname: "Pyrex Graduated Cylinder",
    quantity: "1",
    remarks: "The item has been successfully returned."
  },
];

const active = [
  {
    barcode: "20230102-NKCAM-APM",
    endorsedBy: "Roselle Wednesday Gardon",
    office: "Information Technology Resource Office",
    purpose: "Academic Purposes Midterms & Finals",
    startdate: "January 01, 2023",
    enddate: "January 02, 2023",
    itemname: "Nikon D300 - Camera",
    quantity: "1",

  },
  {
    barcode: "20230202-TABAL-OP",
    endorsedBy: "Patrick Lita",
    office: "Building Management Office",
    purpose: "Organization Purposes",
    startdate: "February 02, 2023",
    enddate: "February 02, 2023",
    itemname: "Volleyball Net and Ball",
    quantity: "1",
  },
  {
    barcode: "20230102-BKPYR-APQ",
    endorsedBy: "Kimberly Cruz",
    office: "Engineering and Science Laboratory Office",
    purpose: "Academic Purposes Assignment - Quizzes",
    startdate: "January 01, 2023",
    enddate: "January 02, 2023",
    itemname: "Pyrex Beaker",
    quantity: "3",
  },
];

// can't call will fix later
const remarks = [
  {
    completed: "The item has been returned successfully.",
  },
  {
    incompleted: "The item has not been returned, but a penalty was paid.",
  },
];

function BorrowTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
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
                  <div className="card-active" style={{ }}>
                    <Card
                      sx={{
                        height: "100%",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      <CardActionArea style={{ lineHeight: "1.5em", whiteSpace: "pre-line"}} onClick={() => handleOpenModal(item)}>
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
                      </CardActionArea>
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
              paddingTop: "1%",
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
                    style={{  }}
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
                      <CardActionArea 
                      style={{ lineHeight: "1.5em", whiteSpace: "pre-line" }}
                      onClick={() => handleOpenModal(item)}>
                      <CardContent style={{ fontSize: "12px" }}>
                        <Typography
                          variant="h3"
                          style={{ paddingBottom: "1%" }}
                        >
                          {item.barcode}
                        </Typography>
                        <strong> Endorsed By:</strong> {item.endorsedBy || ""}{" "}
                        <br />
                        <strong> Office:</strong> {item.office || ""} <br />
                        <strong> Purpose:</strong> {item.purpose || ""} <br />
                        <strong> Remarks:</strong> {item.remarks || ""} <br />
                      </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogContent>
          {selectedItem && (
            <>
              <Typography variant="h3">{selectedItem.barcode}</Typography>
              <strong> Endorsed By:</strong> {selectedItem.endorsedBy}
              <br />
              <strong> Office:</strong> {selectedItem.office}
              <br />
              <strong> Purpose:</strong> {selectedItem.purpose}
              <br />
              <strong> Start Date:</strong> {selectedItem.startdate}
              <br />
              <strong> End Date:</strong> {selectedItem.enddate}
              <br />
              <strong> Item Name:</strong> {selectedItem.itemname}
              <br />
              <strong> Quantity:</strong> {selectedItem.quantity}
              <br />
              <strong> Remarks:</strong>{" "}
              {selectedItem.remarks || "No remarks"}
            </>
          )}
        </DialogContent>
      </Dialog>
    </InnerContainer>
  );
}

export default BorrowTable;
