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
    TableContainer,
    Tab,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from "@mui/material";
  import Dialog from "@mui/material/Dialog";
  import DialogContent from "@mui/material/DialogContent";

  import InnerContainer from "../BorrowingHistory/InnerContainer";

  const complete = [
    {
      barcode: "20200102-FXSL-APM",
      endorsedBy: "Manuel Calimlim ",
      office: "Information Technology Resource Office",
      purpose: "Academic Purpose Midterms & Finals",
      startdate: "January 01, 2020",
      enddate: "January 03, 2020",
      itemname: "Flashpoint XPLOR 600	Strobe Lights",
      quantity: "1",
      remarks: "The penalty has been paid successfully.",
      penaltyamount: "₱2500.00",
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
      remarks: "The item has not been returned.",
      penaltyamount: "On-Going",
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
      remarks: "The item has been lost.",
      penaltyamount: "On-Going",
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
      remarks: "The item has been broken.",
      penaltyamount: "On-Going",
    },
  ];

  function PenaltyTable() {
    const [searchQuery, setSearchQuery] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [secondModalOpen, setSecondModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenModal = (item) => {
      setSelectedItem(item);
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
      setSecondModalOpen(false);
    };

    const handleCloseSecondModal = () => {
      setSecondModalOpen(false);
    };

    const handlePenaltyAmountClick = () => {
      setSecondModalOpen(true);
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
                    <div className="card-active" style={{}}>
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
                          onClick={() => handleOpenModal(item)}
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
              Settled Transaction
            </Typography>
            <Grid container spacing={2}>
              {filteredCompleteData.map((item) => (
                <Grid item xs={4} key={item.barcode}>
                  <Box sx={{ height: "auto" }}>
                    <div className="first-card-completed" style={{}}>
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
                          onClick={() => handleOpenModal(item)}
                        >
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
                            {item.remarks ===
                              "The item has not been returned." && (
                              <Button
                                className="PenaltyAmount"
                                onClick={handlePenaltyAmountClick}
                              >
                                Extend
                              </Button>
                            )}
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
          <DialogContent style={{ lineHeight: "1.6em" }}>
            {selectedItem && (
              <>
                <Typography variant="h3" style={{paddingBottom:"2%"}}>{selectedItem.barcode}</Typography>
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
                <strong> Remarks:</strong> {selectedItem.remarks || "No remarks"}
                <br />
                <strong> Penalty Amount:</strong> {selectedItem.penaltyamount}
                <br />
                <div
                  className="button"
                  style={{ textAlign: "center", paddingTop: "2%" }}
                >
                  {selectedItem.remarks === "The item has not been returned." && (
                    <Button
                      variant="contained"
                      className="PenaltyAmount"
                      onClick={handlePenaltyAmountClick}
                    >
                      Penalty Amount
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={secondModalOpen} onClose={handleCloseSecondModal}>
          <DialogContent>
            {selectedItem && (
              <>
                <Typography variant="h3">{selectedItem.barcode}</Typography>
                <Typography
                  variant="h4"
                  style={{
                    paddingLeft: "2%",
                    paddingTop: "2%",
                    fontWeight: "bold",
                  }}
                >
                  Computation
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Penalty Timer On</TableCell>
                        <TableCell>Penalty Rates</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          Monday to Friday <br /> 08:00 AM to 08:00 PM{" "}
                        </TableCell>
                        <TableCell>
                          {" "}
                          ₱100 per Equipment <br />& Hour
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Saturday <br /> 08:00 AM to 04:00 PM{" "}
                        </TableCell>
                        <TableCell>
                          {" "}
                          ₱100 per Equipment <br />& Hour
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <TableHead>
                      <TableRow>
                        <TableCell>Penalty Timer Off</TableCell>
                        <TableCell>Penalty Rates</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          Monday to Friday <br /> 08:01 PM to 07:59 AM{" "}
                        </TableCell>
                        <TableCell> ₱250 per Evening</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Saturday
                          <br /> 04:01 PM to 7:59 PM <br /> on Monday{" "}
                        </TableCell>
                        <TableCell>
                          {" "}
                          ₱500 per Whole Weekend <br />& Hour
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography
                  variant="h4"
                  style={{
                    paddingLeft: "2%",
                    paddingTop: "2%",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Context{" "}
                </Typography>

                <div
                  className="context-two"
                  style={{
                    paddingTop: "1%",
                    paddingLeft: "2%",
                    lineHeight: "1.6em",
                  }}
                >
                  <strong> Date of Returning:</strong> January 02, 2023 <br />
                  <strong> Total Days of Unreturned Item:</strong> 03 <br />
                  <strong> Penalty Amount:</strong> 300 <br />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </InnerContainer>
    );
  }

  export default PenaltyTable;
